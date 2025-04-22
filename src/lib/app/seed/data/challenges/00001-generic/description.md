---
title: Generic type
difficulty: easy
labels: 
  - generics
---
Let's assume that we have an API that return paginated list of items for several
entities: Users, Books.

The server response for Users looks like that:
```ts
type User = { id: string };
type UserResponse = {
  data: User[],
  total: number;
  page: number;
  limit: number
}
``` 
The server response for Book entities looks like that:
```ts
type Book = { isbn: string};
type BookResponse = {
  data: Book[],
  total: number;
  page: number;
  limit: number
}
```
But we would like to follow Don't Repeat Yourself (DRY) approach and create some
generic type `PaginatedResponse<T>` that would used for creation of both types
`BookResponse` and `UserResponse` in this way:
```ts
type UserResponse = PaginatedResponse<User>
```
