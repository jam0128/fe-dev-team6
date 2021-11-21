import express from "express";
import request from 'request';

const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json()); 
app.get('/', function(req, res) {
    request.post(
        {
        url:'http://localhost:3001/api',
        json: {
         "test1Key": "test1",
         "test2KEy": "test2"
            },
        headers: {
            'Content-Type': 'application/json'
        }
        },
      function(error, response, body){
        // console.log(error);
        // console.log(response);
        console.log(body);
        res.send(body);
      });
  })

// For Access-Control-Allow-Origin error handle
app.use(cors());

// Connect 3001 port
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})