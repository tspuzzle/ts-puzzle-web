import * as migration_20250331_185942_init_shcema from './20250331_185942_init_shcema';

export const migrations = [
  {
    up: migration_20250331_185942_init_shcema.up,
    down: migration_20250331_185942_init_shcema.down,
    name: '20250331_185942_init_shcema'
  },
];
