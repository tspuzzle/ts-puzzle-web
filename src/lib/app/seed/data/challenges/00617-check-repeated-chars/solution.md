---
date: "2024-11-28"
---
```ts
type CheckRepeatedChars<T extends string, Letters extends string[] = []> =
  T extends `${infer LETTER}${infer REST}`
    ? LETTER extends Letters[number]
        ? true
        : CheckRepeatedChars<REST, [LETTER, ...Letters]>
    : false;
```

**Official Documentation:**
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)










