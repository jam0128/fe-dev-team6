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
         "test2KEy": "test2",
         "compo1" : {
            "type" : "KeywordComponent",
            "data" : {
              "title" : "이정재", 
              "category" : "영화배우, 탤런트",
              "tab" : [
                "전체",
                "프로필",
                "최근영상",
                "필모그래피",
                "작품활동"
              ],
              "components" : [
                {
                  "type" : "ProfileComponent",
                  "data" : "..."
                },
                {
                  "type" : "RecentVideosComponent",
                  "data" : "..."
                },
                {
                  "type" : "WorksComponent",
                  "data" : "..."
                },
              ]
            }
          }
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