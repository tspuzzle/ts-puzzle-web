---
date: "2024-11-21"
---
```ts
type PropertyLookup<T, Path extends unknown[]> =
  Path extends [infer K, ...infer REST]
    ? K extends keyof T
       ? PropertyLookup<T[K], REST>
       : never
    : T;  
```
**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)




