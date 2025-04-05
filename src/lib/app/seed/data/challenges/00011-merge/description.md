---
title: Merge
difficulty: medium
labels: 
  - conditional types
  - union types
  - mapped types
  - keyof
---

  Merge two types into a new type. Keys of the second type overrides keys of the first type.

  For example

  ```ts
  type foo = {
    name: string;
    age: string;
  }
  type bar = {
    age: number;
    sex: string
  }

  type Result = Merge<foo, bar> 
  // expected to be 
  // {
  //   name: string, 
  //   age: number, sex: string
  // }
  ```