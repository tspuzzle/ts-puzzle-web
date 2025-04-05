---
date: "2024-11-21"
---
```ts
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [K in T[number]]: K
};
```
Typescript library also has special type declaration `PropertyKey` and it is a built-in type that represents the valid keys for object properties. It is a union of the types `string`, `number`, and `symbol`, which are the three types that can be used as object property keys in JavaScript.

In the context of an array, `PropertyKey` can represent the valid keys used to access the array's properties or elements. Therefore, the solution 1 might be reqritten in this way:
```ts
type TupleToObject<T extends readonly PropertyKey[]> = { 
    [K in T[number]]: K 
};
```
You might also want to check out explanations on other resources:
- [Type Challenges Solutions by Eugene Obrezkov](https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/easy-tuple-to-object.md)

**Official Documentation:**
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
