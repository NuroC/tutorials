const express = require('express');
const expressWs = require('express-ws');
const path = require('path');

const app = express();

const encode = require("./src/encode");
const decode = require("./src/decode");

// initialize express-ws into express
expressWs(app);

// Serve HTML file on the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/main.html'));
});

// Create WebSocket endpoint
app.ws('/ws', (ws, req) => {
    ws.send(JSON.stringify({
        type: "welcome",
        data: encode("Hello, World!", 4)
    }))
    ws.on('message', (msg) => {
        let decoded = decode(msg, 5)
        // random number between 1 and 10
        let shift = Math.round(Math.random() * 10) + 1;

        ws.send(JSON.stringify({
            type: "response",
            data: encode(decoded, shift),
            shift: shift
        }));
    });
});

// Start server on PORT 3000
app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
});

