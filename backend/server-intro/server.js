const http = require("http");

// const server = http.createServer(function (request, response) {
//   console.log(`method: ${request.method} url: ${request.url}`);
//   if (request.method === "GET" && request.url === "/") {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to my server!");
//   } else if (request.method === "GET" && request.url === "/about") {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("This is the about page");
//   } else if (request.method === "GET" && request.url === "/contact") {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Contact me at: tamarboyanjo@email.com");
//   } else {
//     response.writeHead(404, { "Content-Type": "text/plain" });
//     response.end("404 Not Found");
//   }
// });

function validEmail(email) {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
}
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/api/users") {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const id = parseInt(req.url.split("/")[3]);
    const user = users.find((u) => u.id === id);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "User not found" }));
    }
  } else if (req.method === "POST" && req.url === "/api/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (!data.name || !data.email) {
          res.writeHead(400);
          return res.end(
            JSON.stringify({ error: "Name and email are required" })
          );
        }
        if (!validEmail(data.email)) {
          return res.end(JSON.stringify({ error: "email is not valid" }));
        }

        const newUser = {
          id: users.length ? users[users.length - 1].id + 1 : 1,
          name: data.name,
          email: data.email,
        };

        users.push(newUser);

        res.writeHead(201);
        res.end(JSON.stringify(newUser));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});
const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
