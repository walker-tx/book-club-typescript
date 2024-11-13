# Auth
(*auth*)

## Overview

### Available Operations

* [login](#login) - Log in
* [signup](#signup) - Sign up

## login

Log in

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub({
  security: {
    option1: {
      appIdAuth: "<YOUR_API_KEY_HERE>",
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  },
});

async function run() {
  const result = await bookClub.auth.login({
    email: "jdoe123@email.com",
    password: "mrg.qka5awy2jya*FTK",
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
import { authLogin } from "book-club/funcs/authLogin.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore({
  security: {
    option1: {
      appIdAuth: "<YOUR_API_KEY_HERE>",
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  },
});

async function run() {
  const res = await authLogin(bookClub, {
    email: "jdoe123@email.com",
    password: "mrg.qka5awy2jya*FTK",
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
| `request`                                                                                                                                                                      | [operations.LoginRequestBody](../../models/operations/loginrequestbody.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginResponseBody](../../models/operations/loginresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 401, 404    | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## signup

Sign up

### Example Usage

```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub({
  security: {
    option1: {
      appIdAuth: "<YOUR_API_KEY_HERE>",
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  },
});

async function run() {
  await bookClub.auth.signup({
    username: "jdoe123",
    email: "jdoe123@email.com",
    password: "mrg.qka5awy2jya*FTK",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BookClubCore } from "book-club/core.js";
import { authSignup } from "book-club/funcs/authSignup.js";

// Use `BookClubCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const bookClub = new BookClubCore({
  security: {
    option1: {
      appIdAuth: "<YOUR_API_KEY_HERE>",
      apiKeyAuth: "<YOUR_API_KEY_HERE>",
    },
  },
});

async function run() {
  const res = await authSignup(bookClub, {
    username: "jdoe123",
    email: "jdoe123@email.com",
    password: "mrg.qka5awy2jya*FTK",
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
| `request`                                                                                                                                                                      | [operations.SignupRequestBody](../../models/operations/signuprequestbody.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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