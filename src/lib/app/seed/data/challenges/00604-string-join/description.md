---
title: "String: Join"
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - recursive
---
Implement the type version of `Array.join`.
`Join<T, U>` takes an Array T, string or number U and returns the Array T with U stitching up.

  ```ts
  type String1 = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type String2 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type String3 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type String4 = Join<["o"], "u">; // expected to be 'o'
  ```




