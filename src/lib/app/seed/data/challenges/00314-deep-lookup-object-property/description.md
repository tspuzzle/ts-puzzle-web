---
title: Deep Lookup Object Property Type
difficulty: medium
labels: 
  - mapped types
  - infer
  - conditional type
  - template literal
  - recursion
---
Imagine a complex object with multiple nested fields, including arrays. Your goal is to extract the type of a field based on its path. The path is represented as a string, where nested levels are separated by dots (`.`).

This idea is similar to Lodash's `get` method, which takes a complex object as its first argument and a dot-separated path as its second argument to retrieve the value at the specified path.

In this challenge, you need to implement a TypeScript utility type `LookupProperty<T, Path>`. 

This utility type should accept a complex object type `T` and extract the type of the field at the specified `Path`.

**For example:**

```ts
type Obj = {
  a: {
    b: {
      c: boolean
    },
    d: number
  }
}

// expected: boolean
type Result1 = LookupProperty<Obj, 'a.b.c'> 

// expected: number
type Result2 = LookupProperty<Obj, 'a.d'> 

// expected: never =>  since path not exist
type Result2 = LookupProperty<Obj, 'a.b.c.d'> 
```

**Note**: 
Notes:

1. For simplicity, when working with arrays, represent paths using dot notation (e.g., `a.1.b`) to access an element at index `1` in array `a`.

2. You can ignore Lodash-style bracket notation paths like `a[1].b`.

3. If the specified path does not exist in the object, your utility type should evaluate to `never`.

