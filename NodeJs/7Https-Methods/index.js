const http = require("http"); // Import the HTTP module to create the server
const fs = require("fs"); // Import the File System module for file operations
const url = require("url"); // Import the URL module for parsing URL strings

// Create an HTTP server
const myserver = http.createServer((req, res) => {
  // Ignore requests for the favicon
  if (req.url === "/favicon.ico") return res.end();

  // Log request details to a file
  const log = `${Date.now()}: ${req.url} New request received\n`;
  const myurl = url.parse(req.url, true); // Parse the request URL with query parameters
 
  // A log message is created with the current timestamp and the request URL.
  // url.parse(req.url, true): This parses the URL and extracts components like pathname and query parameters. The true argument makes the query string parameters available as an object.
  // console.log(myurl): Logs the parsed URL object to the console for debugging purposes.


  // Append log details to log.txt
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err); // Log any errors during the file write operation
      res.statusCode = 500; // Set HTTP status code to 500 for internal server error
      res.end("Internal Server Error"); // End the response with an error message
      return;
    }

    // Handle different URL paths
    switch (myurl.pathname) {
      case "/":
        if(req.method==='GET')
        res.end("HomePage"); // Respond with HomePage message for the root URL
        break;
      case "/about":
        const username = myurl.query.myname; // Extract 'myname' query parameter
        res.end(`Hi, ${username}`); // Respond with a personalized greeting
        break;
      case "/search":
        const search = myurl.query.search_query; // Extract 'search_query' query parameter
        res.end('Here are your results: ' + search); // Respond with search results
        break;

     case "/signup":
        if(req.method==='GET')
            res.end("This is a sign up form")
        else
        //DB query
           res.end("success")
      default:
        res.end("404 Not Found"); // Respond with a 404 message for unknown paths
        break; // Ensure that no further code executes after a case is handled
    }
  });
});

// Start the server on port 5000
myserver.listen(5000, () => {
  console.log("Server started on port 5000!"); // Log a message when the server starts
});
