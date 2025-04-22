---
title: KebabCase
difficulty: medium
labels: 
  - conditional types
  - template literal
  - infer
  - recursion
---
Replace the `camelCase` or `PascalCase` string with `kebab-case`.

`FooBarBaz` -> `foo-bar-baz`

For example

```ts
type FooBarBaz = KebabCase<"FooBarBaz"> 
// expect: "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
// expect "do-nothing"
  ```




