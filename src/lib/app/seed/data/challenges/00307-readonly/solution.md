---
date: "2024-11-21"
---
```ts
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-readonly.md)

**Official Documentation:**
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
