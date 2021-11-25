import express from "express";
import request from 'request';
import cors from 'cors'
import fs from 'fs'

const app = express();
const port = 3000;

app.use(express.json()); 
app.get('/', function(req, res) {
  const keyword = req.query.search
  var fileName = ""
  console.log("!!!!!!!!!")
  console.log(keyword)
  if (keyword === "이정재") {
    fileName = __dirname + '/json_files/person.json'
  } else if (keyword === "dynamite") {
    fileName = __dirname + '/json_files/music.json'
  } else if (keyword === "샴(샤미즈)") {
    fileName = __dirname + '/json_files/animal.json'
  } else {
    fileName = __dirname + '/json_files/person.json'
  }
  console.log(fileName)
  const jsonFile = fs.readFileSync(fileName, 'utf8');
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