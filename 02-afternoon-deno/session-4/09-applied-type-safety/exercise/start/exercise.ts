import { book, type LibraryItem } from "./data.ts";

function describeLibraryItem(item: LibraryItem) {
  // There will be type errors on this line, we'll fix them in the next steps.
  console.log(
    `- ${item.title} is a book written by ${item.author}, and published in ${item.published}.`
  );
}

describeLibraryItem(book);