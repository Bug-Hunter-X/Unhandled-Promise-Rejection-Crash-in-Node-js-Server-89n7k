const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    //Example: Database query or external API call
    //const result = await someAsyncOperation();
    //if (result.error){
     //   throw new Error(result.error)
    //}  
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Request handler error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Additional error handling logic here (e.g., logging to a file, sending an alert)
});