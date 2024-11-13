<!-- Start SDK Example Usage [usage] -->
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
  const result = await bookClub.book.list({
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