---
title: First unique char index
difficulty: medium
labels: 
  - union types 
  - indexed types
  - conditional types
  - template literal
  - infer
  - recursion
---
Given a string `S`, find the first non-repeating character in it and return its index. If it does not exist, return -1. 

For example:

```ts
type FirstUniqueCharIndex<'abcd'> // 0
type FirstUniqueCharIndex<'abaa'> // 1
type FirstUniqueCharIndex<'aabb'> // -1

```





