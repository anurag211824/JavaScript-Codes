const http = require("http"); // Import HTTP module to create server
const fs = require("fs"); // Import File System module for file operations

// Create an HTTP server
const myserver = http.createServer((req, res) => {
  // Uncomment these lines to log request details for debugging
  // console.log("New req rec");
  // console.log(req.headers);
  // console.log(req);

  // Log request details to a file
  const log = `${Date.now()}: ${req.url} New request received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
      res.end("Internal Server Error");
      return;
    }

    // Respond based on the URL requested
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Anurag Kumar learning Node.js");
        break;
      default:
        res.end("404 Not Found");
        break;
    }

    // Ensure this is the last line to prevent further responses
    // res.end("Hello from Server");
  });

  // Note: The call to `res.end` inside fs.appendFile is important to avoid
  // asynchronous issues. Make sure to handle the response within the callback.
});

// Start the server on port 5000
myserver.listen(5000, () => {
  console.log("Server Started on port 5000!");
});
