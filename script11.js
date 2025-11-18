let library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

console.log("\nBooks in the Library:\n");

let getBookInformation = function (catalog) {
  return catalog.map((book) => `${book.title} by ${book.author}`).join("\n");
};

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

let getBookSummaries = function (catalog) {
  return catalog.map((book) => `${book.about}`).join("\n");
};

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

let getBooksByAuthor = function (catalog, author) {
  return catalog
    .filter((book) => book.author === author)
    .map((book) => `${book.title}`)
    .join("\n");
};

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");

console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

let getTotalPages = function (catalog) {
  return catalog.reduce((total, book) => total + book.pages, 0);
};

console.log(getTotalPages(library));

// -------------------------------------------------

let books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813,
  },
  {
    title: "The Catcher in the Rye",
    authorName: "J.D. Salinger",
    releaseYear: 1951,
  },
];

let sortByYear = function (book1, book2) {
  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else {
    return 0;
  }
};

let filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);

// -------------------------------------------------

let getIndexToIns = function (arr, num) {
  let sortedArr = arr.sort((a, b) => a - b);
  let index = sortedArr.findIndex((i) => num <= i);
  if (index === -1) {
    return sortedArr.length;
  } else {
    return index;
  }
  //   return index === -1 ? sortedArr.length : index;
};

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

// -------------------------------------------------
