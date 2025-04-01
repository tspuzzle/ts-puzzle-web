import * as migration_20250331_185942_init_shcema from './20250331_185942_init_shcema';
import * as migration_20250401_210314_add_challenge_collection from './20250401_210314_add_challenge_collection';

export const migrations = [
  {
    up: migration_20250331_185942_init_shcema.up,
    down: migration_20250331_185942_init_shcema.down,
    name: '20250331_185942_init_shcema',
  },
  {
    up: migration_20250401_210314_add_challenge_collection.up,
    down: migration_20250401_210314_add_challenge_collection.down,
    name: '20250401_210314_add_challenge_collection'
  },
];
