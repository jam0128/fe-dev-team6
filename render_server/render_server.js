import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import TestComponent from "./components/TestComponent";
import Header from "./components/Header";

const app = express();
const port = 3001;

app.use(express.json()); 
app.post('/api', function(req, res) {
    console.log(req.body)
    var json = req.body
    for (var key in json) {
      console.log(key)
      console.log(key + ": " + json[key])
    }
    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React App</title>
      </head>
      <body>
        ${ReactDOMServer.renderToString((<Header value="keyword"/>))}
        <div id="root">${ReactDOMServer.renderToString(<TestComponent></TestComponent>)}</div>
        <div>hello from server side</div>
      </body>
    </html>
    `);


})

// Connect 3001 port
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})