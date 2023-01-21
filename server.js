const http = require("http");

const port = 8081; // local port no


const todolist = ["Complete Node Byte", "Play Cricket"];
http
  .createServer((req, res) => {
    // callback function
    const { method, url } = req;

    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(todolist.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            console.log(body);
          })
      } else {
        res.writeHead(404);
      }
    } else {
      res.writeHead(505);
    }

    res.end();
  })
  .listen(port, () => {
    // callback function 
    console.log(`Nodejs server started on port ${port}`);
  });

