import * as migration_20250331_185942_init_shcema from './20250331_185942_init_shcema';
import * as migration_20250401_210314_add_challenge_collection from './20250401_210314_add_challenge_collection';
import * as migration_20250422_100319_content_for_chapter from './20250422_100319_content_for_chapter';
import * as migration_20250428_151402_add_test_content from './20250428_151402_add_test_content';

export const migrations = [
  {
    up: migration_20250331_185942_init_shcema.up,
    down: migration_20250331_185942_init_shcema.down,
    name: '20250331_185942_init_shcema',
  },
  {
    up: migration_20250401_210314_add_challenge_collection.up,
    down: migration_20250401_210314_add_challenge_collection.down,
    name: '20250401_210314_add_challenge_collection',
  },
  {
    up: migration_20250422_100319_content_for_chapter.up,
    down: migration_20250422_100319_content_for_chapter.down,
    name: '20250422_100319_content_for_chapter',
  },
  {
    up: migration_20250428_151402_add_test_content.up,
    down: migration_20250428_151402_add_test_content.down,
    name: '20250428_151402_add_test_content'
  },
];
