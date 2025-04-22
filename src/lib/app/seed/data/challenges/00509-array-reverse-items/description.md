---
title: "String to Union"
difficulty: easy
labels: 
  - array
  - infer
  - conditional types
  - recursion
---

Implement the type version of ```Array.reverse```

For example:

```typescript
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```