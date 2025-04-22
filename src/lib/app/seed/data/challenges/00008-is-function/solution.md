---
date: "2024-11-21"
---
```ts
type IsFunction<T> = T extends (...args: any)=> any ? true : false;
```
**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)