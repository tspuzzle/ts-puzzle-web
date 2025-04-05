---
date: "2024-11-28"
---
```ts
type ConvertToArray<T> = T extends unknown[] ? T : [T];

type Without<T, U, ACC extends unknown[] = []> = 
  T extends [infer FIRST, ...infer REST]
    ? FIRST extends ConvertToArray<U>[number]
      ? Without<REST, U, ACC>
      : Without<REST, U, [...ACC, FIRST]>
    : ACC;
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-without.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

