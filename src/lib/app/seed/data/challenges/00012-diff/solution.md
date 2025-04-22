---
date: "2024-11-21"
---
```ts
type Diff<O, O1> = {
  [P in keyof O | keyof O1 as Exclude<P, keyof O & keyof O1>]: 
    P extends keyof O
      ? O[P]
      : P extends keyof O1
        ? O1[P]
        : never;
};
```


You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-diff.md)

**Official Documentation:**

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Key remapping in mapped types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Intersection types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
