// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Handle different URLs
    if (req.url === '/') {
        res.write('<h1>Welcome to Home Page</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>About Page</h1>');
    } else {
        res.write('<h1>404 Page Not Found</h1>');
    }

    // End response
    res.end();
});

// Define port
const PORT = 3000;

// Run server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});