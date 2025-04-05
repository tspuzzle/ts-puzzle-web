---
title: "String: Start with"
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - recursive
---
Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

For example

  ```ts
  type a = StartsWith<'abc', 'ac'> // false
  type b = StartsWith<'abc', 'ab'> // true
  type c = StartsWith<'abc', 'abcd'> // false
  ```




