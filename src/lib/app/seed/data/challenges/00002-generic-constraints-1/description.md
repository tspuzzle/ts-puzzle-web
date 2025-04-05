---
title: Generic Type with Constraints 1
difficulty: easy
labels: 
  - generic constraints
---
Create util type that may accept only `string` or `number` types and return passed type as it is.
For other types TS compiler should throw an error.

For example:
```ts
CheckStringOrNumber<string> // expect string
CheckStringOrNumber<number> // expect number

CheckStringOrNumber<string[]> // ❌ TS traspilation error
```