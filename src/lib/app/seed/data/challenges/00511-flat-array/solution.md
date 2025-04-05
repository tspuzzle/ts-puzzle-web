---
date: "2024-11-21"
---
```ts
type Flatten<T extends unknown[]> = 
  T extends [infer First, ...infer Rest ]
    ? First extends any[] 
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>]
    : [];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-flatten.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

