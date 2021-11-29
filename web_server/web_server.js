import express from "express";
import request from 'request';
import cors from 'cors'
import fs from 'fs'

const app = express();
const port = 3000;

app.use(express.json()); 
app.get('/', function(req, res) {
  const keyValueJson = JSON.parse(fs.readFileSync(__dirname + "/keywords.json", 'utf8'));
  var fileName = ""
  for (var key in keyValueJson) {
    fileName = __dirname + keyValueJson[key]
    if (req.query.search === key) { break } 
  }
  
  request.post(
    {
      url:'http://localhost:3001/api',
      json: JSON.parse(fs.readFileSync(fileName, 'utf8')),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    function(error, response, body){
      res.send(body);
    });
  })

// For Access-Control-Allow-Origin error handle
app.use(cors());

// Connect 3001 port
app.listen(port, () => {
    console.log(`express is running on ${port}`);
})