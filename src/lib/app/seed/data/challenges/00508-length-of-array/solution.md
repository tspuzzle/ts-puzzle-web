---
date: "2024-11-21"
---
**Solution 1**
```ts
type Length<T extends {length: number}> = T['length'];
```
**Solution 2**
```ts
type Length<T extends readonly unknown[]> = T['length'];
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-tuple-length.md)

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

