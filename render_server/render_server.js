import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import TestComponent from "./components/TestComponent";
import Header from "./components/Header";
import KeyWordComponent from "./components/KeyWord";
import OtherComponent from "./components/OtherComponents";
import App from "./components/App";


const app = express();
const port = 3001;

app.use(express.json()); 
app.post('/api', function(req, res) {
  let result = `
  <!DOCTYPE html>
  ${ReactDOMServer.renderToString((<App info={req.body}/>))}
  `;
  
  res.send(result);
})

// Connect 3001 port
app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
})