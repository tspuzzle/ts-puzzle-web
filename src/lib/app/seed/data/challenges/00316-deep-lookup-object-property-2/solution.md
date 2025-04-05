---
date: "2024-11-21"
---
```ts
type ArrayNotation<S, A extends string[] = []> =
    S extends `${infer F}[${infer INDEX}]${infer R}`
      ? F extends '' 
         ? ArrayNotation<R, [...A, INDEX]> 
         : ArrayNotation<R, [...A, F, INDEX]>
      : S extends '' ? A : [...A, S];

type LookupPathParser<P> =
    P extends `${infer K}.${infer R}`
      ? [...ArrayNotation<K>, ...LookupPathParser<R>]
        : P extends ''
        ? []
      : ArrayNotation<P>;

type LookupProprtyByArrayLikePath<T, Path extends unknown[]> =
  Path extends [infer K, ...infer REST]
    ? K extends keyof T
       ? LookupProprtyByArrayLikePath<T[K], REST>
       : never
    : T; 

type LookupProperty<T, Path extends string> = 
    LookupProprtyByArrayLikePath<T, LookupPathParser<Path>>
```
**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)




