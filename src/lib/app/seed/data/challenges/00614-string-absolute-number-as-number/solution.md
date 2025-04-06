---
date: "2024-11-21"
---
```ts
type ConvertToNumber<T extends string | number | bigint> = 
  `${T}` extends `${infer NUMBER extends number}`
    ? NUMBER
    : never;

type Absolute<T extends number | string | bigint> = 
  `${T}` extends `-${infer NUMBER extends number}` 
      ? NUMBER 
      : ConvertToNumber<T>;
```

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)







