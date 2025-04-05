---
title: Generic Type with Constraints 2
difficulty: easy
labels: 
  - generic constraints
---
Each Database entity has their own unique `id`, let's assume that `id` presented as a string:
```ts
type IdLike = {
   id: string;
}

type Book = IdLike & {
   title: string;
}

type User = IdLike & {
   email: string;
}
```
The developer would like to implement the function that would log `id` for entities and started
with the following function
```ts
const log = <T>(entity: T) {
   // ❌ Error Property 'id' does not exist on type 'T'
   console.log(entity.id); 
}
```
But Typescript compiler threw an error in a line when developer tried to get access to
`id` property. In the code editor you will see highlighted error on the line 2. You should fix this error.
