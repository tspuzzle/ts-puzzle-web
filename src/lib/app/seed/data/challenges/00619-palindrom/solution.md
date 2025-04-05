---
date: "2024-11-28"
---
```ts
type IsPalindrome<T extends string | number, S = `${T}`> = 
  S extends `${infer FIRST}${infer TAIL}`
    ? TAIL extends '' 
      ? true
      : S extends `${FIRST}${infer REST}${FIRST}`
        ? IsPalindrome<REST>
        : false
    : true;
```

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)










