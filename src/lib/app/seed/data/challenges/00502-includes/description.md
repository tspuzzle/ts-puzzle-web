---
title: Includes
difficulty: medium
labels: 
  - array
  - infer
---
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isIncludeKate = 
    Includes<['Bob', 'Karson'], 'Kate'>; // expected to be `false`
  type isIncludeBob = 
    Includes<['Bob', 'Karson'], 'Bob'>; // expected to be `true`
  ```

