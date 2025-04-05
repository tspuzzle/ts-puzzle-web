---
title: Get Return Type
difficulty: easy
labels: 
  - built-in
  - generic constraints
  - infer
  - conditional-types
---
Implement the built-in `ReturnType<T>` generic without using it.

For example

```ts
const fn = (v: boolean) => {
  if (v)
    return 1;
  else
    return 2;
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```