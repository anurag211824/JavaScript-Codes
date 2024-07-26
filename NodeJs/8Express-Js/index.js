const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from home page");
});

app.get("/about", (req, res) => {
  return res.send(
    "hello from About page" +
      "hey " +
      req.query.name +
      " you are " +
      req.query.age
  );
});
const myserver = http.createServer(app);

// myserver.listen(8080, () => {
//   console.log(`server started at port 8080`);
// });

app.listen(8080, () => {
  console.log(`server started at port 8080`);
});
