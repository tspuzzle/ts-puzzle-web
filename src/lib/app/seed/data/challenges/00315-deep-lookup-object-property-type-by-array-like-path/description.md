---
title: Deep Lookup Object Property Type 2
difficulty: medium
labels: 
  - conditional type
  - recursion
  - variadic tuple types
---
In this challenge, you need to create a utility type `PropertyLookup<T, Path>` that allows accessing deeply nested properties of a complex object T based on a given path represented as a tuple of keys (`Path`).

The utility type should resolve the type of the property at the specified path. If the path does not exist, it can return `never`.

**For example:**

```ts
type Obj1 = {
  a: { b: [{ c: boolean }] };
};

// expected: boolean
type Result1 = PropertyLookup<Obj1, ['a', 'b', '0', 'c']>

// expected: { c: boolean }
type Result2 = PropertyLookup<Obj1, ['a', 'b', '0']>

// expected: never =>  since path not exist
type Result3 = PropertyLookup<Obj1, ['a', 'x']>; 
```