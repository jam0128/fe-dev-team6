import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import TestComponent from "../components/TestComponent";
import Header from "../components/Header";
import KeyWordComponent from "../components/KeyWord";
import OtherComponent from "../components/OtherComponents";
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