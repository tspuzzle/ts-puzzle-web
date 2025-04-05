---
date: "2024-11-21"
---
**Solution 1**
```ts
type First<T> = T extends [infer FIRST, ...any] ? FIRST : never;
```
**Solution 2**
```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-first.md)

**Official Documentation:**
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
