---
date: "2024-11-21"
---
```ts
type ReplaceFirst<T extends readonly unknown[], S, R> =
  T extends [infer FIRST, ...infer TAIL]
    ? FIRST extends S 
      ? [R, ...TAIL]
      : [FIRST, ...ReplaceFirst<TAIL, S, R>]
    : T;
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-replace-first.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

