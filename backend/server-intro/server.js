const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(`method: ${request.method} url: ${request.url}`);
  if (request.method === "GET" && request.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server!");
  } else if (request.method === "GET" && request.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page");
  } else if (request.method === "GET" && request.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact me at: tamarboyanjo@email.com");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
  response.end();
});

// GET /contact - Return your contact information
// Any other route - Return "404 - Page not found" with status code 404

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
