---
date: "2024-11-21"
---
```ts
type RevertArray<T extends unknown[]> = 
  T extends [infer R, ...infer TAIL]
    ? [...RevertArray<TAIL>, R]
    : [];
  
type FlipArguments<T extends (...args: any) => any> = 
  T extends  (...args: infer Params) => infer R 
    ? (...args: RevertArray<Params>) => R
    : never;
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-flip-arguments.md)

**Official Documentation:**

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)




