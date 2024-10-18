const express = require('express');
const app = express();
const WebSocket = require('ws');
app.use(express.json());
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.send('Welcome to the WebSocket server!');
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Server received: ${message}`);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
      });
    });
    
    console.log('WebSocket server is running on ws://localhost:8080');
