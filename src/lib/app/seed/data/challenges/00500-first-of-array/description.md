---
title: First of array
difficulty: easy
labels: 
  - infer
  - conditional types
---
Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

For example:

```ts
type arr1 = ['a', 'b', 'c']
type head1 = First<arr1> // expected to be 'a'

type arr2 = [3, 2, 1]
type head2 = First<arr2> // expected to be 3
```