---
title: Length of array
difficulty: easy
labels: 
  - infer
  - readonly
---
For given array, you need create a generic `Length`, pick the length of the array

For example:

```ts
type arr1 = ['item1', 'item2', 'item3']
type lengthArr1 = Length<arr1>  // expected 3

type arr2 = [1, 2, 3, 4, 5]
type lengthArr2 = Length<arr2> // expected 5
  ```