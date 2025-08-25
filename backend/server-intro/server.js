const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(`method: ${request.method} url: ${request.url}`);
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to my server!");
  } else if (request.method === "GET" && request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("This is the about page");
  } else if (request.method === "GET" && request.url === "/contact") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Contact me at: tamarboyanjo@email.com");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Not Found");
  }
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
