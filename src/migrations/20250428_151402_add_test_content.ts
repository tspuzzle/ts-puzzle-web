import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_chapters_questions_type" AS ENUM('single', 'multiple');
  CREATE TYPE "public"."enum_chapters_type" AS ENUM('text', 'test');
  CREATE TABLE IF NOT EXISTS "chapters_questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"answer" jsonb,
  	"is_correct" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "chapters_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" jsonb,
  	"type" "enum_chapters_questions_type" DEFAULT 'single'
  );
  
  ALTER TABLE "chapters" ADD COLUMN "type" "enum_chapters_type" DEFAULT 'text';
  DO $$ BEGIN
   ALTER TABLE "chapters_questions_answers" ADD CONSTRAINT "chapters_questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chapters_questions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chapters_questions" ADD CONSTRAINT "chapters_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chapters"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "chapters_questions_answers_order_idx" ON "chapters_questions_answers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chapters_questions_answers_parent_id_idx" ON "chapters_questions_answers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chapters_questions_order_idx" ON "chapters_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chapters_questions_parent_id_idx" ON "chapters_questions" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "chapters_questions_answers" CASCADE;
  DROP TABLE "chapters_questions" CASCADE;
  ALTER TABLE "chapters" DROP COLUMN IF EXISTS "type";
  DROP TYPE "public"."enum_chapters_questions_type";
  DROP TYPE "public"."enum_chapters_type";`)
}
