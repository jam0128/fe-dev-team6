const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
