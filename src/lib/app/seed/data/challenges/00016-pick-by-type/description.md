---
title: "Object: Pick by type"
difficulty: medium
labels: 
  - object
  - conditional types
  - mapped types
  - key remapping
---
  From `T`, pick a set of properties whose type are assignable to `U`.

  For example:

  ```typescript
  type Model = {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean
  };

  type OnlyBoolean = PickByType<Model, boolean> 
  // { isReadonly: boolean; isEnable: boolean; }
  ```
