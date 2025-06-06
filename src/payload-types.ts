/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    challenges: Challenge;
    challengeLabels: ChallengeLabel;
    courses: Course;
    lessons: Lesson;
    chapters: Chapter;
    users: User;
    accounts: Account;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    courses: {
      lessons: 'lessons';
    };
    lessons: {
      chapters: 'chapters';
    };
    users: {
      accounts: 'accounts';
    };
  };
  collectionsSelect: {
    challenges: ChallengesSelect<false> | ChallengesSelect<true>;
    challengeLabels: ChallengeLabelsSelect<false> | ChallengeLabelsSelect<true>;
    courses: CoursesSelect<false> | CoursesSelect<true>;
    lessons: LessonsSelect<false> | LessonsSelect<true>;
    chapters: ChaptersSelect<false> | ChaptersSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    accounts: AccountsSelect<false> | AccountsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenges".
 */
export interface Challenge {
  id: number;
  slug: string;
  slugLock?: boolean | null;
  title: string;
  difficulty: 'beginner' | 'easy' | 'medium' | 'hard' | 'extreme';
  labels?: (number | ChallengeLabel)[] | null;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  testCases?:
    | {
        task?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        expected?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        test?: string | null;
        id?: string | null;
      }[]
    | null;
  solution?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  template?: string | null;
  order?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengeLabels".
 */
export interface ChallengeLabel {
  id: number;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courses".
 */
export interface Course {
  id: number;
  slug: string;
  slugLock?: boolean | null;
  title: string;
  description?: string | null;
  lessons?: {
    docs?: (number | Lesson)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lessons".
 */
export interface Lesson {
  id: number;
  course: number | Course;
  courseSlug?: string | null;
  slug: string;
  slugLock?: boolean | null;
  title: string;
  description: string;
  order?: number | null;
  chapters?: {
    docs?: (number | Chapter)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chapters".
 */
export interface Chapter {
  id: number;
  lesson: number | Lesson;
  slug: string;
  slugLock?: boolean | null;
  title: string;
  type?: ('text' | 'test') | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  questions?:
    | {
        question: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        type: 'single' | 'multiple';
        answers?:
          | {
              answer: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              };
              isCorrect: boolean;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  order?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified?: string | null;
  password?: string | null;
  accounts?: {
    docs?: (number | Account)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "accounts".
 */
export interface Account {
  id: number;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | null;
  accessToken?: string | null;
  user: number | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'challenges';
        value: number | Challenge;
      } | null)
    | ({
        relationTo: 'challengeLabels';
        value: number | ChallengeLabel;
      } | null)
    | ({
        relationTo: 'courses';
        value: number | Course;
      } | null)
    | ({
        relationTo: 'lessons';
        value: number | Lesson;
      } | null)
    | ({
        relationTo: 'chapters';
        value: number | Chapter;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'accounts';
        value: number | Account;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenges_select".
 */
export interface ChallengesSelect<T extends boolean = true> {
  slug?: T;
  slugLock?: T;
  title?: T;
  difficulty?: T;
  labels?: T;
  description?: T;
  testCases?:
    | T
    | {
        task?: T;
        expected?: T;
        test?: T;
        id?: T;
      };
  solution?: T;
  template?: T;
  order?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengeLabels_select".
 */
export interface ChallengeLabelsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courses_select".
 */
export interface CoursesSelect<T extends boolean = true> {
  slug?: T;
  slugLock?: T;
  title?: T;
  description?: T;
  lessons?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "lessons_select".
 */
export interface LessonsSelect<T extends boolean = true> {
  course?: T;
  courseSlug?: T;
  slug?: T;
  slugLock?: T;
  title?: T;
  description?: T;
  order?: T;
  chapters?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chapters_select".
 */
export interface ChaptersSelect<T extends boolean = true> {
  lesson?: T;
  slug?: T;
  slugLock?: T;
  title?: T;
  type?: T;
  content?: T;
  questions?:
    | T
    | {
        question?: T;
        type?: T;
        answers?:
          | T
          | {
              answer?: T;
              isCorrect?: T;
              id?: T;
            };
        id?: T;
      };
  order?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  email?: T;
  name?: T;
  image?: T;
  emailVerified?: T;
  password?: T;
  accounts?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "accounts_select".
 */
export interface AccountsSelect<T extends boolean = true> {
  type?: T;
  provider?: T;
  providerAccountId?: T;
  refreshToken?: T;
  accessToken?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeBlock".
 */
export interface CodeBlock {
  language?: ('typescript' | 'javascript' | 'css') | null;
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'code';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeEditorBlock".
 */
export interface CodeEditorBlock {
  language?: ('typescript' | 'javascript') | null;
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'codeEditor';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  quote: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'quote';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}