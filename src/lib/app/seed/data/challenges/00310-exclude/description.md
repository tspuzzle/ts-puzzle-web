---
title: Exclude
difficulty: easy
labels: 
  - built-in
  - infer
  - conditional types
  - distributive conditional types
---
Implement the built-in `Exclude<T, U>`

> Exclude from `T` those types that are assignable to `U`

For example:

```ts
MyExclude<'a' | 'b' | 'c', 'a'> // expected: 'b' | 'c'
```
