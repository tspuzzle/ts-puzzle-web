---
date: "2024-11-21"
---
```ts
type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends '' 
    ? S 
    : S extends `${infer F}${From}${infer L}`
        ? `${ReplaceAll<F, From, To>}${To}${ReplaceAll<L, From, To>}` 
        : S;
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-replace.md)

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)







