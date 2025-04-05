---
date: "2024-11-21"
---
```ts
type GetOptional<T> = {
  [KEY in keyof T as T[KEY] extends Required<T>[KEY] ? never : KEY]: T[KEY]
}
```

**Official Documentation:**

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Key remapping in mapped types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types)


