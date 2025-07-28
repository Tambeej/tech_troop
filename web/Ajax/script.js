//Ex 1.

function fetchBookByISBN(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      if (data.totalItems > 0) {
        const book = data.items[0].volumeInfo;
        console.log("Title:", book.title);
        console.log("Authors:", book.authors?.join(", "));
      } else {
        console.log("No book found with ISBN:", isbn);
      }
    },
    error: function (xhr, text, error) {
      console.error("Error:", text);
    },
  });
}
fetchBookByISBN("9780575087057"); // The Name of the Wind
fetchBookByISBN("9782806269171"); // The Little Prince
fetchBookByISBN("1440633908"); // Of Mice and Men
fetchBookByISBN("9781945048470"); // The Alchemist
fetchBookByISBN("9780307417138"); // Hitchhiker's Guide

//Ex 2.

function fetchBookByISBNOrTitle(queryType, queryValue) {
  let urlSub =
    queryType === "isbn" ? `isbn:${queryValue}` : `intitle:${queryValue}`;
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${urlSub}`,
    success: function (data) {
      if (data.totalItems > 0) {
        const book = data.items[0].volumeInfo;
        console.log("Title:", book.title);
        console.log("Authors:", book.authors?.join(", "));
      } else {
        console.log(`No book found with ${queryType}:`, queryValue);
      }
    },
    error: function (xhr, text, error) {
      console.error("Error:", text);
    },
  });
}
fetchBookByISBNOrTitle("isbn", 9789814561778); // From Third World to First: The Singapore Story
fetchBookByISBNOrTitle("title", "How to Win Friends and Influence People"); // book by Dale Carnegie
