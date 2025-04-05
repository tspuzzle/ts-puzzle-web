---
date: "2024-11-28"
---
```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends(
    <T>() => T extends Y ? 1 : 2) ? true : false;

type Include<T extends unknown[], U> = 
  T extends [infer HEAD, ...infer TAIL]
    ? Equal<HEAD, U> extends true 
      ? true
      : Include<TAIL, U>
    : false;

type Unique<T> = 
  T extends [...infer Head, infer Tail]
    ? Include<Head, Tail> extends true
      ? Unique<Head>
      : [...Unique<Head>, Tail]
    : [];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-unique.md)

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)










