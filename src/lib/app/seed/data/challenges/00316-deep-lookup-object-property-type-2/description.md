---
title: Deep Lookup Object Property Type 2
difficulty: hard
labels: 
  - mapped types
  - infer
  - conditional type
  - template literal
  - recursion
  - variadic tuple types
---
Imagine a complex object with multiple nested fields, including arrays. Your goal is to extract the type of a field based on its path. The path can be represented as a string, where nested levels are separated by dots (`.`) or using Lodash-style bracket notation (e.g., `a[1].b`).

This idea is similar to Lodash's `get` method, which takes a complex object as its first argument and a path as its second argument to retrieve the value at the specified path. The path can use either dot-separated segments or bracket-style indexing.

In this challenge, you need to implement a TypeScript utility type `LookupProperty<T, Path>`. This utility type should accept a complex object type `T` and extract the type of the field at the specified `Path`.

**For example:**

```ts
type Obj = {
  a: {
    b:
      [
        [{ d : number }], 
        [[{ e: boolean }]]
      ],
    c: number
  }
}

// expected: number
type Result1 = LookupProperty<Obj, 'a.c'> 

// expected: number
type Result2 = LookupProperty<Obj, 'a.d'> 

// expected: never =>  since path not exist
type Result2 = LookupProperty<Obj, 'a.b.c.d'> 
```