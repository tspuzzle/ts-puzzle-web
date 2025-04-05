---
date: "2024-11-21"
---
```ts
type Flip<T extends {[k: string | number]: string | number| boolean}> = {
  [K in keyof T as `${T[K]}`]: K
}
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-flip.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Key remapping in mapped types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)



