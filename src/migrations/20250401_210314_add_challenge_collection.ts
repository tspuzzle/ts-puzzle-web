import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_challenges_difficulty" AS ENUM('beginner', 'easy', 'medium', 'hard', 'extreme');
  CREATE TABLE IF NOT EXISTS "challenges" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"title" varchar NOT NULL,
  	"difficulty" "enum_challenges_difficulty" NOT NULL,
  	"description" jsonb NOT NULL,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "challenges_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"challenge_labels_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "challenge_labels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "challenges_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "challenge_labels_id" integer;
  DO $$ BEGIN
   ALTER TABLE "challenges_rels" ADD CONSTRAINT "challenges_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "challenges_rels" ADD CONSTRAINT "challenges_rels_challenge_labels_fk" FOREIGN KEY ("challenge_labels_id") REFERENCES "public"."challenge_labels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "challenges_slug_idx" ON "challenges" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "challenges_updated_at_idx" ON "challenges" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenges_created_at_idx" ON "challenges" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "challenges_rels_order_idx" ON "challenges_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "challenges_rels_parent_idx" ON "challenges_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "challenges_rels_path_idx" ON "challenges_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "challenges_rels_challenge_labels_id_idx" ON "challenges_rels" USING btree ("challenge_labels_id");
  CREATE INDEX IF NOT EXISTS "challenge_labels_title_idx" ON "challenge_labels" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "challenge_labels_updated_at_idx" ON "challenge_labels" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "challenge_labels_created_at_idx" ON "challenge_labels" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenges_fk" FOREIGN KEY ("challenges_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_labels_fk" FOREIGN KEY ("challenge_labels_id") REFERENCES "public"."challenge_labels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenges_id_idx" ON "payload_locked_documents_rels" USING btree ("challenges_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_challenge_labels_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_labels_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "challenges" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenges_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenge_labels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "challenges" CASCADE;
  DROP TABLE "challenges_rels" CASCADE;
  DROP TABLE "challenge_labels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_challenges_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_challenge_labels_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_challenges_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_challenge_labels_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "challenges_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "challenge_labels_id";
  DROP TYPE "public"."enum_challenges_difficulty";`)
}
