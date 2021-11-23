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
              "category" : [
                "영화배우, 탤런트"
              ],
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
                {
                  "type" : "RelationArtistComponent",
                  "data" : {
                    "title" : "비슷한 아티스트",
                    "contents" : [
                      {
                        "thumbnail" : "tmp1.png",
                        "title" : "펜타곤",
                      },
                      {
                        "thumbnail" : "tmp2.png",
                        "title" : "Wanna One(워너원)",
                      },
                      {
                        "thumbnail" : "tmp3.png",
                        "title" : "세븐틴",
                      },
                      {
                        "thumbnail" : "tmp4.png",
                        "title" : "PRODUCE 101",
                      },
                      {
                        "thumbnail" : "tmp5.png",
                        "title" : "블락비(Block B)",
                      },
                      {
                        "thumbnail" : "tmp6.png",
                        "title" : "WINNER",
                      },
                      {
                        "thumbnail" : "tmp7.png",
                        "title" : "인피니트",
                      },
                      {
                        "thumbnail" : "tmp8.png",
                        "title" : "EXO-K",
                      },
                      {
                        "thumbnail" : "tmp9.png",
                        "title" : "EXO",
                      },
                      {
                        "thumbnail" : "tmp10.png",
                        "title" : "블락비 바스타즈",
                      },
                      {
                        "thumbnail" : "tmp11.png",
                        "title" : "투모로우바이투게더",
                      },
                      {
                        "thumbnail" : "tmp12.png",
                        "title" : "iKON",
                      },
                      {
                        "thumbnail" : "tmp13.png",
                        "title" : "Steve Aoki",
                      },
                      {
                        "thumbnail" : "tmp14.png",
                        "title" : "Justin Bieber",
                      },
                      {
                        "thumbnail" : "tmp15.png",
                        "title" : "Lil Nas X",
                      },
                    ],
                  }
                },
                {
                  "type" : "AlsoSearchComponent",
                  "data" : {
                    "title" : "함께 찾은 품종",
                    "contents" : [
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "페르시안"
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "터키시앙고라 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "코리안쇼트헤어 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "아비시니안 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "아메리칸쇼트헤어 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "스핑크스 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "스코티시폴드 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "브리티시쇼트헤 "
                      },
                      {
                        "thumbnail" : "cat1.png",
                        "title" : "뱅갈 "
                      },
                    ]  
                  }
                }
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