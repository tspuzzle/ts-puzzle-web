---
date: "2024-11-21"
---
```ts
const log = <T extends { id: string }>(entity: T) => {
  console.log(entity.id); 
};
```
**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)