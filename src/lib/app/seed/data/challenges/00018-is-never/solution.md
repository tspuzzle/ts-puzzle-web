---
date: "2024-12-01"
---
```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-isnever.md)

**Official Documentation:**

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [never type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
- [Distributive Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)





