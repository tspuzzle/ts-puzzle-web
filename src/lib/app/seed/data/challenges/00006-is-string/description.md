---
title: Is String?
difficulty: easy
labels: 
  - conditional types
---
Implement the util type `IsString<T>` which accepts type `T` and return `true` if
it's string or `false` if it is not.
```ts
IsString<'abc'> // expected true
IsString<12> // expected false
IsString<() => void> // expected false
```