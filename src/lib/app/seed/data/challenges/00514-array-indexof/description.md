---
title: "Array: IndexOf"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - recursion
---
Implement the type version of `Array.indexOf`

`IndexOf<T, U>` takes an Array of `T`, any `U` and returns the index 
of the first `U` in Array of `T`.


For example:

```ts
type Res1 = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res2 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res3 = IndexOf<[0, 0, 0], 2>; // expected to be -1
```
