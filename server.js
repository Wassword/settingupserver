const http = require('http');

// Create an HTTP server that listens to server requests and returns a response
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');  // Set the content type to plain text



//Respond with a simple HTML page when the root route (/) is accessed:
if (req.url === '/') {
    res.statusCode = 200;  // Set the HTTP status code to 200 OK
    res.setHeader('Content-Type', 'text/plain');  // Set the content type to plain text
    res.end('<h1>Welcome to Coco Server</h2>');


//Respond with a JSON object containing a greeting message when the /api route is accessed.   
} else if (req.url === '/api') {
    const responseJson = { greetings: 'Hello, welcome to the API!'};
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(responseJson))
}

else {
    res.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
}
})
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});


