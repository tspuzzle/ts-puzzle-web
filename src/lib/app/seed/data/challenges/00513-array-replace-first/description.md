---
title: "Array: Replace First"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - recursion
---
  Implement the type `ReplaceFirst<T, S, R>` which will replace the first occurrence of `S` in a tuple `T` with `R`. If no such `S` exists in `T`, the result should be `T`.


For example:

```ts
ReplaceFirst<[1, 2, 3], 3, 4>
// Expected:  [1, 2, 4]
```
