---
date: "2024-11-21"
---
```ts
type IsEqual<A, B> = 
  A extends B 
    ? B extends A 
      ? true
      : false
    : false;

type LastIndexOf<T extends unknown[], U> = 
  T extends [...infer HEAD, infer LAST]
    ? IsEqual<LAST, U> extends true
      ? HEAD['length']
      : LastIndexOf<HEAD, U>
    : -1  
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-lastindexof.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)

