---
title: Last of array
difficulty: easy
labels: 
  - array
  - infer
---
Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type last1 = Last<arr1> // expected to be 'c'

type arr2 = [3, 2, 1]
type last2 = Last<arr2> // expected to be 1
```