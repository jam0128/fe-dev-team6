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
                  "data" : {
                    "title" : "최근영상",
                    "contents" : [
                      {
                        "thumbnail" : "tmp1.png",
                        "length" : "04:01",
                        "title" : "배우들도 놀란 '오징어 게임' 세트 이야기 (이정재.박해수.정호연.허성태.위하준)",
                        "website" : "네이버TV",
                        "date" : "2021.09.28"
                      },
                      {
                        "thumbnail" : "tmp2.png",
                        "length" : "01:28",
                        "title" : "[넷플릭스] 오징어 게임 | 하이라이트 | 사람들이 게임에 참가할 수밖에 없는 이유",
                        "website" : "VLIVE",
                        "date" : "2021.09.24"
                      },
                      {
                        "thumbnail" : "tmp3.png",
                        "length" : "01:30",
                        "title" : "[넷플릭스] 오징어 게임 | 하이라이트 | 사람이 죽자, 상금이 올라갔다",
                        "website" : "VLIVE",
                        "date" : "2021.09.24"
                      },
                    ],
                  }
                },
                {
                  "type" : "WorksComponent",
                  "data" : {
                    "tabs" : [
                      {
                        "title" : "영화",
                        "contents" : [
                          {
                            "thumbnail" : "none.png",
                            "title" : "헌트(가제)",
                            "role" : "감독, 주연 - 박평호 역",
                            "date" : "2021."
                          },
                          {
                            "thumbnail" : "tmp1.png",
                            "title" : "다만 악에서 구하소서",
                            "role" : "주연 - 레이 역",
                            "date" : "2020.08.05"
                          },
                          {
                            "thumbnail" : "tmp2.png",
                            "title" : "어쩌다, 결혼",
                            "role" : "특별출연 - 변호사 역",
                            "date" : "2019.02.27."
                          },
                        ],
                      },
                      {
                        "title" : "방송",
                        "contents" : [
                          {
                            "thumbnail" : "tmp3.png",
                            "title" : "오징어 게임",
                            "role" : "기훈",
                            "date" : "2021.09.17."
                          },
                          {
                            "thumbnail" : "tmp4.png",
                            "title" : "보좌관 2 - 세상을 움직이는 사람들",
                            "role" : "장태준 주연",
                            "date" : "2019.11.11.~2019.12.10."
                          },
                          {
                            "thumbnail" : "tmp5.png",
                            "title" : "보좌관 2 - 세상을 움직이는 사람들",
                            "role" : "장태준 주연",
                            "date" : "2019.06.14.~2019.07.13."
                          },
                        ],
                      },
                      {
                        "title" : "곡",
                        "contents" : [
                          {
                            "thumbnail" : "tmp6.png",
                            "title" : "세종의 편지",
                            "album" : "태풍 OST",
                            "date" : "2005.12.15"
                          },
                          {
                            "thumbnail" : "tmp7.png",
                            "title" : "천생연분",
                            "album" : "앨범명오! 브라더스 O.S.T",
                            "date" : "2003.08.27"
                          },
                          {
                            "thumbnail" : "tmp8.png",
                            "title" : "어디선가 본 듯한...",
                            "album" : "순애보 (純愛譜: Asako In Ruby Shoes) OST",
                            "date" : "2000.12.19"
                          },
                        ],
                      },
                    ]
                  }
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