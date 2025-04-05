---
title: Tuple to Object
difficulty: easy
labels: 
  - mapped types
  - indexed types
---
Given an array, transform it into an object type and the key/value must be in the provided array.

For example:

```ts
  const tuple = ['item1', 'item2', 'item3'] as const

  type result = TupleToObject<typeof tuple> 
  /* expected 
  { 
   'item1': 'item1', 
   'item2': 'item2',
   'item3': 'item3',
  }
  */
```

