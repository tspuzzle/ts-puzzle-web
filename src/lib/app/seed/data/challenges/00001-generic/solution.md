---
date: "2024-11-21"
---
```ts
type PaginatedResponse<T> = {
  data: T[],
  total: number;
  page: number;
  limit: number
};
```
**Official Documentation:**
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
