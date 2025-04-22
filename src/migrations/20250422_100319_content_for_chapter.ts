import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "challenges_test_cases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"task" jsonb,
  	"expected" jsonb,
  	"test" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "lessons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"course_id" integer NOT NULL,
  	"course_slug" varchar,
  	"slug" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chapters" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lesson_id" integer NOT NULL,
  	"slug" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"title" varchar NOT NULL,
  	"content" jsonb,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "challenges" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "challenges" ADD COLUMN "solution" jsonb;
  ALTER TABLE "challenges" ADD COLUMN "template" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "courses_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "lessons_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "chapters_id" integer;
  DO $$ BEGIN
   ALTER TABLE "challenges_test_cases" ADD CONSTRAINT "challenges_test_cases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chapters" ADD CONSTRAINT "chapters_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "challenges_test_cases_order_idx" ON "challenges_test_cases" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "challenges_test_cases_parent_id_idx" ON "challenges_test_cases" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "courses_slug_idx" ON "courses" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "lessons_course_idx" ON "lessons" USING btree ("course_id");
  CREATE INDEX IF NOT EXISTS "lessons_course_slug_idx" ON "lessons" USING btree ("course_slug");
  CREATE INDEX IF NOT EXISTS "lessons_slug_idx" ON "lessons" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "lessons_updated_at_idx" ON "lessons" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "lessons_created_at_idx" ON "lessons" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "chapters_lesson_idx" ON "chapters" USING btree ("lesson_id");
  CREATE INDEX IF NOT EXISTS "chapters_slug_idx" ON "chapters" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "chapters_updated_at_idx" ON "chapters" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "chapters_created_at_idx" ON "chapters" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_lessons_fk" FOREIGN KEY ("lessons_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chapters_fk" FOREIGN KEY ("chapters_id") REFERENCES "public"."chapters"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_lessons_id_idx" ON "payload_locked_documents_rels" USING btree ("lessons_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_chapters_id_idx" ON "payload_locked_documents_rels" USING btree ("chapters_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "challenges_test_cases" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "courses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "lessons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "chapters" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "challenges_test_cases" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "lessons" CASCADE;
  DROP TABLE "chapters" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_courses_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_lessons_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_chapters_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_courses_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_lessons_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_chapters_id_idx";
  ALTER TABLE "challenges" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "challenges" DROP COLUMN IF EXISTS "solution";
  ALTER TABLE "challenges" DROP COLUMN IF EXISTS "template";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "courses_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "lessons_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "chapters_id";`)
}
