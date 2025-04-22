---
title: Parameters
difficulty: medium
labels: 
  - built-in
  - infer
  - conditional types
---

  
  Implement the built-in Parameters<T> generic without using it.
  This utility type is supposed to obtain the parameters of a function 
  type in a tuple.

  For example:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```
