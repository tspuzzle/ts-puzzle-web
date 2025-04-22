---
title: Parse Object Lookup String
difficulty: medium
labels: 
  - conditional types
  - template literal
  - recursion
  - variadic tuple types
  - infer
---
Your task is to implement a TypeScript utility type called `LookupPathParser`. 

This utility should take a string representing a lookup object path and produce an array of strings, parsing both `dot notation` and `array notation`.


**Requirements:**
1. **Dot Notation**: For paths like `a.b.c.d`, the result should be:
```ts
['a', 'b', 'c', 'd']
```
2. **Array Notation**: Paths that include array indices, such as `a[1].b[0].c`, should be parsed correctly. The result for this case should be:
```ts
['a', '1', 'b', '0', 'c']
```