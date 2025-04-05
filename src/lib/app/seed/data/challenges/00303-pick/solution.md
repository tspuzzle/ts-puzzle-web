---
date: "2024-11-21"
---
**Solution 1:**
```ts
type MyPick<T, K extends keyof T> = {
    [KEY in keyof T as KEY extends K ? KEY : never]: T[KEY]
};
```
**Solution 2:**
```ts
type MyPick<T, K extends keyof T> = {
    [KEY in K]: T[KEY]
};
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-pick.md)

**Official Documentation:**
- [Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Key remapping in mapped types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)