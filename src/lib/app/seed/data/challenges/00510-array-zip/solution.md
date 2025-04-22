---
date: "2024-11-21"
---
```ts
type Zip<A1, A2> = 
  A1 extends [infer A1_FIRST, ...infer A1_REST] 
    ? A2 extends [infer A2_FIRST, ...infer A2_REST]
      ? [[A1_FIRST, A2_FIRST], ...Zip<A1_REST, A2_REST>] 
      : []
    : [];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-zip.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

