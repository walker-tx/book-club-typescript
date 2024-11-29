<!-- Start SDK Example Usage [usage] -->
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