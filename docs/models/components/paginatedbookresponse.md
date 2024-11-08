# PaginatedBookResponse

## Example Usage

```typescript
import { PaginatedBookResponse } from "book-club/models/components";

let value: PaginatedBookResponse = {
  next: "https://api.example.com/endpoint?limit=10&offset=10",
  previous: null,
  results: [
    {
      id: 1,
      title: "Frankenstein",
      author: "Mary Shelley",
      isbn10: "1234567890",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `next`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `previous`                                           | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `results`                                            | [components.Book](../../models/components/book.md)[] | :heavy_check_mark:                                   | N/A                                                  |