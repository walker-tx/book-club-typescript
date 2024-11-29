# Book
(*book*)

## Overview

### Available Operations

* [list](#list) - List all books
* [create](#create) - Create a book
* [get](#get) - Get a book by ID
* [delete](#delete) - Delete a book

## list

List all books

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  const result = await bookClub.book.list({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 10,
    offset: 0,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { bookList } from "book-club/funcs/bookList.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await bookList(bookClub, {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    limit: 10,
    offset: 0,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBooksRequest](../../models/operations/listbooksrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListBooksSecurity](../../models/operations/listbookssecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListBooksResponse](../../models/operations/listbooksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## create

Create a book

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  await bookClub.book.create({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn10: "0143131842",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { bookCreate } from "book-club/funcs/bookCreate.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await bookCreate(bookClub, {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn10: "0143131842",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBookRequestBody](../../models/operations/createbookrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateBookSecurity](../../models/operations/createbooksecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## get

Get a book by ID

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  const result = await bookClub.book.get({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    id: 123,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { bookGet } from "book-club/funcs/bookGet.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await bookGet(bookClub, {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    id: 123,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBookRequest](../../models/operations/getbookrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetBookSecurity](../../models/operations/getbooksecurity.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Book](../../models/components/book.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 404         | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## delete

Delete a book

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  await bookClub.book.delete({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    id: 123,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { bookDelete } from "book-club/funcs/bookDelete.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await bookDelete(bookClub, {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    id: 123,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBookRequest](../../models/operations/deletebookrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteBookSecurity](../../models/operations/deletebooksecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 404         | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |