---
date: "2024-11-21"
---
```ts
type AppendArgument<Fn extends (...arg: any[]) => any, ARG> =
    Fn extends (...args: infer A) => infer R
      ? (...args: [...A, ARG]) => R 
      : never;
```

You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-append-argument.md)

**Official Documentation:**
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Type Inference in Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)
- [Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [Rest Parameters and Arguments in Function](https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments)


