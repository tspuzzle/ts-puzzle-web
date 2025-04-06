---
date: "2024-11-28"
---
```ts
type ExtractLetters<T extends string, LETTERS extends string[] = []> =
  T extends `${infer LETTER}${infer REST}` 
    ? REST extends ''
      ? [LETTER, ...LETTERS]
      : ExtractLetters<REST, [LETTER, ...LETTERS]>
  : LETTERS;

type FirstUniqueCharIndex<T extends string, ACC extends string[] = []> =
  T extends `${infer L}${infer REST_WORD}`
    ? REST_WORD extends '' 
      ? -1
      : L extends ExtractLetters<REST_WORD>[number] | ACC[number]
          ? FirstUniqueCharIndex<REST_WORD, [L, ...ACC]>
          : ACC['length']
    : -1;
```

**Official Documentation:**
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types)
- [Recursive Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types)










