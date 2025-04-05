---
title: "Array: Without"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - indexed type
  - recursion
---
Implement the type version of `Lodash.without`.

`Without<T, U>` takes an Array of `T`, `U` is number or array and returns an Array without the elements of `U`.

  ```ts
  // expected to be [2]
  type Res1 = Without<[1, 2], 1>; 

  // expected to be [4, 5]
  type Res2 = Without<[1, 2, 4, 1, 5], [1, 2]>; 

  // expected to be []
  type Res2 = Without<[2, 3, 2, 3], [2, 3]>; 
  ```
