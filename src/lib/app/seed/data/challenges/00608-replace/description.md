---
title: "String: Replace"
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
---
Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

For example

```ts
type replaced = Replace<'hello, {name}!', '{name}', 'Vlad'> 
// expected: 'hello, Vlad!'
```



