const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
    console.log("New request received");

    // Parse the URL
    const myUrl = url.parse(req.url, true);
    
    // Log the request path to a file (as seen in the image)
    fs.appendFile("log.txt", `${new Date().toISOString()} - ${myUrl.pathname}\n`, (err) => {
        if (err) {
            console.error("Error writing to log file", err);
        }
    });

    // Switch case for routing
    switch (myUrl.pathname) {
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            res.end("I am anurag");
            break;
        default:
            res.end("404 Not Found");
            break;
    }
});

myserver.listen(5000, () => console.log("Server started on port 5000"));
