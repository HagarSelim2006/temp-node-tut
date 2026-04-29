// Built-in HTTP Module
// helps us to set up a web server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    return res.end("Welcome to our short history");
  }

  return res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for</p>
    <a href ='/'>Back Home</a>
    `);
});

server.listen(5000);
