---
date: "2024-11-21"
---
```ts
type Concat<A1 extends unknown[],A2 extends unknown[]> = [...A1, ...A2];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-concat.md)

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
