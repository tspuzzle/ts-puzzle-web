---
title: Pop
difficulty: easy
labels: 
  - array
  - infer
---
Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

For example

```ts
type arr1 = ['a', 'b', 'c', 'd'];
type pop1 = Pop<arr1> // expected to be ['a', 'b', 'c']

type arr2 = [3, 2, 1]
type pop2 = Pop<arr2> // expected to be [3, 2]
  ```