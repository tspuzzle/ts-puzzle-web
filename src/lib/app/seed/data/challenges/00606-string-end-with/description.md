---
title: "String: End with"
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - recursive
---
  Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

  For example:

  ```typescript
  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
  ```




