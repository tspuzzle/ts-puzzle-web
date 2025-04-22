---
title: "Array: LastIndexOf"
difficulty: medium
labels: 
  - array
  - infer
  - conditional types
  - recursion
---
Implement the type version of ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  takes an Array  of ```T```, any ```U``` and returns the index of the last ```U``` in Array of ```T```



For example:


  ```typescript
  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
  ```
