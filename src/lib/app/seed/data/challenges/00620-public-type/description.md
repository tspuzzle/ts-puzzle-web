---
title: Public type
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - mapped types
  - key remapping
---
Implement util type `PublicType<T>` that removes the key starting with `_` from given type `T`.

For example:

  ```ts
PublicType<{ _id: number, name: string }>
// expected 
// {
//   name: string;
// }
  ```





