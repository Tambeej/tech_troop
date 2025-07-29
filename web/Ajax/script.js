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

//Ex 3.

function fetchBookByISBNOrTitleAllBooks(queryType, queryValue) {
  let urlSub =
    queryType === "isbn" ? `isbn:${queryValue}` : `intitle:${queryValue}`;
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${urlSub}`,
    success: function (data) {
      if (data.totalItems > 0) {
        data.items.forEach((item) => {
          const book = item.volumeInfo;
          console.log("Title:", book.title);
          console.log("Authors:", book.authors?.join(", "));
        });
      } else {
        console.log(`No book found with ${queryType}:`, queryValue);
      }
    },
    error: function (xhr, text, error) {
      console.error("Error:", text);
    },
  });
}
fetchBookByISBNOrTitleAllBooks("isbn", 9789814561778); // From Third World to First: The Singapore Story
fetchBookByISBNOrTitleAllBooks(
  "title",
  "How to Win Friends and Influence People"
); // book by Dale Carnegie

//Ex 4.

const API_KEY = "uHD2Phm7lB4u2hk3k0TVbRX56RlEvmgo";
const url = `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${API_KEY}&limit=1`;

var xhr = $.get(url);
xhr.done(function (data) {
  console.log("success got data", data);
});
$.ajax({
  method: "GET",
  url: url,
  success: function (data) {
    const embedUrl = data.data[0].embed_url;
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.width = "480";
    iframe.height = "360";
    iframe.frameBorder = "0";
    document.getElementById("gif-container").appendChild(iframe);
  },
  error: function (xhr, text, error) {
    console.error("Error:", text);
  },
});

//Ex 5.
$("#search-gif").on("click", searchGif);
$("#search-input").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    searchGif();
  }
});

function searchGif() {
  const input = $("#search-input").val().trim();
  if (input) {
    const API_KEY = "uHD2Phm7lB4u2hk3k0TVbRX56RlEvmgo";
    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${API_KEY}&limit=1`;

    var xhr = $.get(url);
    xhr.done(function (data) {
      console.log("success got data", data);
    });
    $("#gif-container").empty();
    $.ajax({
      method: "GET",
      url: url,
      success: function (data) {
        const embedUrl = data.data[0].embed_url;
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl;
        iframe.width = "480";
        iframe.height = "360";
        iframe.frameBorder = "0";
        document.getElementById("gif-container").appendChild(iframe);
      },
      error: function (xhr, text, error) {
        console.error("Error:", text);
      },
    });

    $("#search-input").val("");
  }
}
