---
title: Awaited 2
difficulty: medium
labels: 
  - built-in
  - recursion
  - infer
  - conditional types
---
If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?

For example: if we have `Promise<PromiseType>` how to get `PromiseType`?

```ts
type PromiseType = Promise<string>

type Result = MyAwaited<PromiseType> // string
```

Please pay your attention that this type should unwrap nested promises:
```ts
type NestedPromiseType = Promise<Promise<Promise<string>>>;

type Result = MyAwaited<NestedPromiseType> // string
```
**Note:** In this challenge we also should take into account that type should be extracted not only from `Promise` type, but also from types that implement `PromiseLike` interface defined in `lib.es5.d.ts`.

```ts
// Test case:
MyAwaited<{ 
  then: (onfulfilled: (arg: number) => any) => any 
}> // expected number

```