---
title: "Array: Unique elements"
difficulty: medium
labels: 
  - generic
  - conditional types
  - infer
  - recursion
---

Implement the type version of `Lodash.uniq` 

`Unique<T>` takes an Array of `T`, returns the Array of `T` without repeated values.

  ```ts
// expected to be [1, 2, 3]
type Res1 = Unique<[1, 1, 2, 2, 3, 3]>; 

// expected to be [1, 2, 3, 4, 5]
type Res2 = Unique<[1, 2, 3, 4, 4, 5]>; 

// expected to be [string, number, 1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; 
```






