---
date: "2024-12-03"
---
```ts
type Absolute<T extends number> = 
  `${T}` extends `-${infer NUMBER extends number}` 
      ? NUMBER 
      : T;

type TakeFirst<N extends number, Arr extends unknown[], Acc extends unknown[] = []> =
  Acc['length'] extends N
    ?  Acc
    : Arr extends [infer F, ...infer TAIL]
      ? TakeFirst<N, TAIL, [...Acc, F]>
      : Acc;

type TakeLast<N extends number, Arr extends unknown[], Acc extends unknown[] = []> = 
  Acc['length'] extends N
    ? Acc
    : Arr extends[...infer HEAD, infer L]
      ? TakeLast<N, HEAD, [L, ...Acc]>
      : Acc;
  
type Take<N extends number, Arr extends unknown[]> = 
  N extends Absolute<N>
    // take elements from the start of array
    ? TakeFirst<N, Arr>
    // take elements from the end of array
    : TakeLast<Absolute<N>, Arr>;
```

**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)










