---
date: "2024-11-21"
---
```ts
type Merge<F, S> = {
  [KEY in (keyof F | keyof S)]: 
    KEY extends keyof S 
      ? S[KEY]
      : KEY extends keyof F 
        ? F[KEY]
        : never;
}
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-merge.md)

**Official Documentation:**
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
