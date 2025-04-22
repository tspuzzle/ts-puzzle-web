---
title: "Is Never"
difficulty: medium
labels: 
  - never type
  - distributive conditional types
---
Implement a type IsNever, which takes input type `T`.
If the type of resolves to `never`, return `true`, otherwise `false`.

  For example:

  ```ts
// expected to be true
type A = IsNever<never> 

// all cases below expected false
type B = IsNever<undefined>
type C = IsNever<null> 
type D = IsNever<[]> 
type E = IsNever<number> 
  ```

