---
title: Get Optional Fields
difficulty: easy
labels: 
  - mapped types
  - keyof
---
Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

For example

```ts
type Model = {
  foo: number; 
  bar?: string;
}

// expected to be { bar?: string }
GetOptional<Model> 
```

