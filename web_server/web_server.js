import express from "express";
import request from 'request';
import cors from 'cors'
import fs from 'fs'

const app = express();
const port = 3000;

app.use(express.json()); 
app.get('/', function(req, res) {
  const jsonFile = fs.readFileSync(__dirname + '/json_files/person.json', 'utf8');
  const jsonData = JSON.parse(jsonFile);
    request.post(
        {
        url:'http://localhost:3001/api',
        json: jsonData,
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
app.listen(port, () => {
    console.log(`express is running on ${port}`);
})