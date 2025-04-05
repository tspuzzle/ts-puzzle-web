---
date: "2024-11-21"
---
```ts
type Filter<T extends any[], P> = 
  T extends [infer FIRST, ...infer REST]
    ? FIRST extends P 
      ? [FIRST, ...Filter<REST, P>]
      : Filter<REST, P>
    : T;
```

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

