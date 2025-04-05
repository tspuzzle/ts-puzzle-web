---
date: "2024-11-21"
---
```ts
type Trunc<T extends number | string> = 
   `${T}` extends `${infer R}.${infer _}`
      ? R extends '-' | '' 
         ? `${R}0`
         : R
    : `${T}`;
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-trunc.md)

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)







