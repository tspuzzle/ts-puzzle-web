---
title: Flip key and value in object
difficulty: medium
labels: 
  - conditional types
  - mapped types
  - key remapping
---
  Implement the type of `Flip<T>`. `Flip` transforms an object type by swapping its keys and values. The keys in the resulting object will be the values from the input, and the values will be the keys from the input.
  
  For example:

  ```typescript
  Flip<{ a: "x", b: "y", c: "z" }>; 
  // {x: 'a', y: 'b', z: 'c'}

  Flip<{ a: 1, b: 2, c: 3 }>; 
  // {1: 'a', 2: 'b', 3: 'c'}

  Flip<{ a: false, b: true }>; 
  // {false: 'a', true: 'b'}
  ```

  No need to support nested objects and values which cannot be object keys such as arrays