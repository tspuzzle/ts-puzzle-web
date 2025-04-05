---
title: "Flat Array"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - recursion
---
You would need to write a type that takes an array and emitted the flatten array type.

For example:

```ts
Flatten<[1, 2, [3, 4], [[[5]]]]> 
// Expected:  [1, 2, 3, 4, 5]
```
