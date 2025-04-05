---
title: Append Argument to Object
difficulty: medium
labels: 
  - union types
  - conditional types
  - keyof
  - mapped types
---
Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

  For example

  ```ts
  type Object1 = { id: '1' }
  type Result = AppendToObject<Object1, 'value', boolean> 
  // expected to be { id: '1', value: boolean }
  ```