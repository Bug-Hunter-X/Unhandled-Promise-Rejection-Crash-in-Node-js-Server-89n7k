# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common yet often overlooked issue in Node.js applications: unexpected server crashes due to unhandled promise rejections.  The example showcases a simple HTTP server that can crash silently if an asynchronous operation within a request handler fails to handle potential errors.

## Problem

Unhandled promise rejections can cause the Node.js process to terminate unexpectedly, especially problematic in production. The default behavior doesn't provide informative error messages, making debugging difficult.

## Solution

The solution demonstrates how to use the `process.on('unhandledRejection', ...)` event listener to gracefully handle these rejections. This ensures that the application doesn't terminate abruptly and allows for logging or other appropriate error handling.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies (if any).
3. Run `node server.js`. 
4. Simulate an error in the asynchronous operation(Add a line to throw an error in the request handler for testing).
5. Observe the server's behavior and the console output.