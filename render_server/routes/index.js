import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

var router = express.Router();

router.post('/', function(req, res, next) {    
    let result = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Naver</title>
            <link
                async
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            />
            <link rel="stylesheet" href="/static/css/style.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/> 
        </head>
        <body>
            <div id="root">${ReactDOMServer.renderToString((<App info={req.body}/>))}</div>
        </body>
    </html>
    `;
    
    res.send(result);
});

module.exports = router;