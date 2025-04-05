---
title: "String: Trim Left"
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - recursive
---
  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

  For example

  ```ts
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  ```
