---
title: "Array: Take N Elements"
difficulty: hard
labels: 
  - generic
  - conditional types
  - infer
  - variadic tuple types
  - recursion
---


Implement a type `Take<N, Arr>` that returns the first `N` elements from an array `Arr`. If `N` is negative, return the last `|N|` elements

For example,
```ts
// expected: [1, 2]
type T1 = Take<2, [1, 2, 3]> 

// expected: ['1', 2, true]
type T2 = Take<3, ['1', 2, true, false]> 

// expected: [2, 3]
type T3 = Take<-2, [1, 2, 3]> // [2, 3]
```







