---
date: "2024-11-21"
---
```ts
type ParseSign<A extends string> = 
  A extends `${infer F}${any}` 
    ? F extends '+' | '-'
      ? F
      : ''
    : '';
type ParsePersent<A extends string> = 
  A extends `${any}%` ? '%': '';

type ParseNumber<A extends string> = 
  A extends `${ParseSign<A>}${infer NUMBER}${ParsePersent<A>}`
    ? NUMBER
    : '';

type PercentageParser<A extends string> = [
  ParseSign<A>,
  ParseNumber<A>,
  ParsePersent<A>
]
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-percentage-parser.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)







