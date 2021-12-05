import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

var router = express.Router();

router.post('/', function(req, res, next) {    
    let result = `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToString((<App info={req.body}/>))}
    `;
    
    res.send(result);
});

module.exports = router;