# Library
(*library*)

## Overview

### Available Operations

* [get](#get) - List books by user
* [add](#add) - Add book to user library

## get

List books by user

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  const result = await bookClub.library.get({
    userId: 123,
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
import { libraryGet } from "book-club/funcs/libraryGet.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await libraryGet(bookClub, {
    userId: 123,
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
| `request`                                                                                                                                                                      | [operations.GetUserLibraryRequest](../../models/operations/getuserlibraryrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserLibraryResponse](../../models/operations/getuserlibraryresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## add

Add book to user library

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub();

async function run() {
  await bookClub.library.add({
    userId: 123,
    requestBody: {
      bookId: 123,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { libraryAdd } from "book-club/funcs/libraryAdd.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore();

async function run() {
  const res = await libraryAdd(bookClub, {
    userId: 123,
    requestBody: {
      bookId: 123,
    },
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
| `request`                                                                                                                                                                      | [operations.AddBookToUserLibraryRequest](../../models/operations/addbooktouserlibraryrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 404, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |