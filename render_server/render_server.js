import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import TestComponent from "./components/TestComponent";
import Header from "./components/Header";
import KeyWordComponent from "./components/KeyWord";


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
        <title>Naver</title>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>  
      </head>
      <body>
        ${ReactDOMServer.renderToString((<Header value={req.body['test1Key']}/>))}
        <div id="root">${ReactDOMServer.renderToString(<TestComponent></TestComponent>)}</div>
        <div>hello from server side</div>
        <div style="width:768px; margin:0 auto;">
          ${ReactDOMServer.renderToString(<KeyWordComponent info={req.body['compo1']['data']}/>)}
        </div>
      </body>
    </html>
    `);


})

// Connect 3001 port
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})