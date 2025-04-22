---
title: "Filter Array"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - recursion
---
Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.

For example:

```ts
Filter<[0, 1, 2], 2>
// Expected:  [2]
```
