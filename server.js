const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon bug: Unexpected Server Crash due to Unhandled Promise Rejection
//In this example, an asynchronous operation (e.g., database query, external API call) might throw an error.
if (process.env.NODE_ENV !== 'production'){ // only for development
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise,
                      'reason:', reason);
        // Application specific logging, throwing an error, or other logic here
        server.close(()=>{process.exit(1)});
      });
}

