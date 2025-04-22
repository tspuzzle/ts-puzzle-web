---
title: Is Function?
difficulty: easy
labels: 
  - conditional types
---
Implement the util type `IsFunction<T>` which accepts type `T` and return `true` if
it's function or `false` if it is not.
```ts

// expected true for all statements below:
IsFunction<() => void> 
IsFunction<(n: number) => boolean> 
IsFunction<(n: number, a: string[]) => Promise<void>> 

// expected false for all statements below:
IsFunction<12> 
IsFunction<'abc'> 
```