---
title: Difference
difficulty: medium
labels: 
  - conditional types
  - union types
  - intersection types
  - mapped types
  - keyof
---

Get an `Object` that is the difference between `O` & `O1`.

For example:
```ts
type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

Diff<Foo, Bar>
// expected: 
// {
//   gender: number
// }
```