# book-club

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *book-club* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=book-club&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/walker/walker). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [book-club](#book-club)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add book-club
```

### PNPM

```bash
pnpm add book-club
```

### Bun

```bash
bun add book-club
```

### Yarn

```bash
yarn add book-club zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auth](docs/sdks/auth/README.md)

* [login](docs/sdks/auth/README.md#login) - Log in
* [signup](docs/sdks/auth/README.md#signup) - Sign up

### [book](docs/sdks/book/README.md)

* [list](docs/sdks/book/README.md#list) - List all books
* [create](docs/sdks/book/README.md#create) - Create a book
* [get](docs/sdks/book/README.md#get) - Get a book by ID
* [delete](docs/sdks/book/README.md#delete) - Delete a book


### [library](docs/sdks/library/README.md)

* [get](docs/sdks/library/README.md#get) - List books by user
* [add](docs/sdks/library/README.md#add) - Add book to user library

### [user](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - Get a user by ID

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authLogin`](docs/sdks/auth/README.md#login) - Log in
- [`authSignup`](docs/sdks/auth/README.md#signup) - Sign up
- [`bookCreate`](docs/sdks/book/README.md#create) - Create a book
- [`bookDelete`](docs/sdks/book/README.md#delete) - Delete a book
- [`bookGet`](docs/sdks/book/README.md#get) - Get a book by ID
- [`bookList`](docs/sdks/book/README.md#list) - List all books
- [`libraryAdd`](docs/sdks/library/README.md#add) - Add book to user library
- [`libraryGet`](docs/sdks/library/README.md#get) - List books by user
- [`userGet`](docs/sdks/user/README.md#get) - Get a user by ID

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

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
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type      | Status Code | Content Type     |
| --------------- | ----------- | ---------------- |
| errors.ErrorT   | 400         | application/json |
| errors.APIError | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { BookClub } from "book-club";
import { ErrorT, SDKValidationError } from "book-club/models/errors";

const bookClub = new BookClub();

async function run() {
  let result;
  try {
    result = await bookClub.book.list({
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
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub({
  serverURL: "https://book-club-api-opal.vercel.app/api",
});

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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { BookClub } from "book-club";
import { HTTPClient } from "book-club/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new BookClub({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  |
| ------------ | ------ | ------- |
| `apiKeyAuth` | apiKey | API key |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { BookClub } from "book-club";

const bookClub = new BookClub({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
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
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { BookClub } from "book-club";

const sdk = new BookClub({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=book-club&utm_campaign=typescript)
