---
date: "2024-11-21"
---
```ts
type AppendToObject<T, U extends string, V> =  {
  [K in U | keyof T]: K extends keyof T ? T[K]: V
}
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-append-to-object.md)

**Official Documentation:**
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)


