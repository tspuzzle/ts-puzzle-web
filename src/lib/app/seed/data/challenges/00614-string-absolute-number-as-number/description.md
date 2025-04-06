---
title: Absolute number as number
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
---
Implement the `Absolute<T>` type. A type that take string, number or bigint. The output should be a positive number string

For example

```ts
type Test = -100
type Result = Absolute<Test> 
// expected to be 100
```




