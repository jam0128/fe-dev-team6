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
            },
          },
            "compo2" : [
              {
                "type" : "InfluencerComponent",
                "data" : {
                  "title" : "인플루언서",
                  "contents" : [
                    {
                      "thumbnail" : "tmp1.png",
                      "writer" : "유언님",
                      "button" : "팬하기",
                      "photo" : [
                        "cat1.png",
                        "cat2.png",
                        "cat3.png",
                        "cat4.png"
                      ],
                      "title" : "태국 왕실묘 출신 샴 고양이 성격이 말썽쟁이 품종이라고?",
                      "body" : "이번에 소개하는 고양이 품종은 태국 왕실묘 출신의 샴 고양이로 성격과 함께 신비로운 외모에 대해서 알아보도록 하겠습니다. 실제로 샴 고양이는 신비롭고 이쁜 포인트 컬러의 외모가 특징이라 매우 귀여우면서도...",
                      "date" : "2021.10.10.",
                      "related" : 3
                    },
                    {
                      "thumbnail" : "tmp2.png",
                      "writer" : "독티처",
                      "button" : "팬하기",
                      "photo" : [
                        "cat1.png",
                        "cat2.png",
                        "cat3.png",
                        "cat4.png"
                      ],
                      "title" : "묘종 샴고양이 성격 수명 털빠짐 총정리!",
                      "body" : "안녕하세요 독티처 고쌤입니다 오늘은 샴고양이에 대해서 알아볼건데요 기품이 넘치고 가장 고양이 답다고 해서 고양이 왕이라고도 불려지는데요 자연발생한 이 고양이는 페르시안과 쌍벽을 이루는 대표적인인 묘종중...",
                      "date" : "2021.10.21.",
                      "related" : 4
                    },
                    {
                      "thumbnail" : "tmp3.png",
                      "writer" : "고쌤",
                      "button" : "팬하기",
                      "photo" : [
                        "cat1.png",
                        "cat2.png",
                        "cat3.png",
                        "cat4.png"
                      ],
                      "title" : "샴 고양이 반려묘 종류 성격 수명 털빠짐은?",
                      "body" : "안녕하세요 독티처 고쌤입니다 오늘은 샴고양이에 대해서 설명드릴게요 이 종은 태국이 원산이며 오리엔탈 바디타입으로 사진에 나와 있는 것처럼 다리와 목이 길며 마른 몸매를 가지고 있으면서 역삼각형 얼굴을 가지...",
                      "date" : "2021.10.01.",
                      "related" : 1
                    },
                  ],
                }
              },
              {
                "type" : "VIEWComponent",
                "data" : {
                  "title" : "VIEW",
                  "contents" : [
                    {
                      "thumbnail" : "tmp1.png",
                      "icon" : "icon1.png",
                      "writer" : "끄.적.끄.적.",
                      "influencer" : true,
                      "date" : "2020.08.21.",
                      "title" : "life is dynamite 방탄 다이너마이트 뮤비 가사 짤",
                      "body" : "< life is dynamite 방탄 다이너마이트 뮤비 가사 짤 > 드디어 공개된 방탄... like dynamite woah 펑크와 소울로 이 도시를 밝혀 빛으로 물들일 거야 다이너마이트처럼 JIN...",
                      "tags" : [
                        "방탄다이너마이트",
                        "lifeisdynamite",
                        "dynamite",
                      ]
                    },
                    {
                      "thumbnail" : "tmp2.png",
                      "icon" : "icon2.png",
                      "writer" : "남나르",
                      "influencer" : false,
                      "date" : "2020.08.14.",
                      "title" : "[방탄소년단(BTS)] Dynamite at the Roller Staking Rink! (다이너마이트 롤러 스케이트 링크장 촬영)",
                      "body" : "bts #아미 #army #RM #SUGA #Jhope #V #JK #김남준 #김석진 #민윤기 #정호석 #박지민 #김태형 #전정국 #알엠 #진 #슈가 #제이홉 #지민 #뷔 #정국 #아포방포 #보라해 #다이너마이트 #dynamite",
                      "tags" : [
                        "방탄소년단",
                        "bts",
                        "아미",
                        "army",
                        "RM",
                        "SUGA",
                        "Jhope",
                        "V",
                        "JK",
                        "김남준",
                      ]
                    },
                    {
                      "thumbnail" : "tmp3.png",
                      "icon" : "icon3.png",
                      "writer" : "디제잉배우기플라시보",
                      "influencer" : true,
                      "date" : "2021.11.11.",
                      "title" : "[로드×칼리드×시저×포스트말론] Lorde - Homemade Dynamite Remix ft.Khalid,SZA,Post Malone 가사...",
                      "body" : "로드 Lorde의 Homemade Dynamite Remix 입니다! 2017년에 나온 곡이지만, 위켄드... Homemade Dynamite는 파티에서 상대를 찾는 내용의 곡이에요! 진짜 집에서 만든...",
                      "tags" : [
                        "HomemadeDynamite",
                        "HomemadeDynamite 가사",
                        "HomemadeDynamite 해석",
                        "HomemadeDynamiteRemix",
                        "HomemadeDynamiteRemix 가사",
                        "HomemadeDynamiteRemix 해석",
                        "홈메이드다이너마이트",
                        "다이너마이트",
                      ]
                    },
                  ],
                }
              },
              {
                "type" : "NewsComponent",
                "data" : {
                  "title" : "뉴스",
                  "contents" : [
                    {
                      "thumbnail" : "tmp1.png",
                      "icon" : "icon1.png",
                      "publish" : "한겨레",
                      "date" : "2021.11.15.12:44",
                      "website" : "네이버뉴스",
                      "title" : "이정재 첫 연출 데뷔작 ‘헌트’ 촬영 종료…내년 개봉 예정",
                      "body" : "전세계에 신드롬을 불러일으킨 넷플릭스 오리지널 <오징어 게임>을 통해 글로벌 스타로 거듭난 이정재의 감독 데뷔작 <헌트>가 6개월 동안의 촬영을 끝냈다고 배급사인 메가박스중앙플러스엠이 15일 밝혔다. 는 안기부 요원 ‘박평호’(이정재)와 ‘김정도’(정우성)가 남파 간첩 총책임자를...",
                      "related" : 36,
                      "others" : [
                        {
                          "title" : "이정재 연출·주연 영화 '헌트' 크랭크업",
                          "publish" : "연합뉴스",
                          "date" : "2021.11.15.10:44",
                          "website" : "네이버뉴스",
                        },
                        {
                          "title" : "이정재 연출·주연 영화 '헌트' 크랭크업",
                          "publish" : "연합뉴스",
                          "date" : "2021.11.15.10:44",
                          "website" : "네이버뉴스",
                        },
                        {
                          "title" : "이정재 연출·주연 영화 '헌트' 크랭크업",
                          "publish" : "연합뉴스",
                          "date" : "2021.11.15.10:44",
                          "website" : "네이버뉴스",
                        }
                      ]
                    },
                    {
                      "thumbnail" : "tmp2.png",
                      "icon" : "icon2.png",
                      "publish" : "서울경제",
                      "date" : "2021.11.14.11:44",
                      "website" : "네이버뉴스",
                      "title" : `제니 "이정재 때문에 이름 '제니'"···이정재와 특별한 인연`,
                      "body" : "배우 이정재와 블랙핑크 제니가 만났다. 이정재는 14일 자신의 인스타그램에 별다른 코멘트 없이 여러 장의 사진을 게재했다. 최근 미국 LA LACMA에서 열린 ‘2021 LACMA 아트+필름 갈라’에 참석한 이정재는 공개된 사진 속에서 정호연, 제니, 엘르 패닝 등과 만나 다정한 포즈를 취하고 있다...",
                      "related" : 21,
                    },
                    {
                      "thumbnail" : "tmp3.png",
                      "icon" : "icon3.png",
                      "publish" : "텐아시아",
                      "date" : "2021.11.14.01:44",
                      "website" : "네이버뉴스",
                      "title" : `이정재, 블핑 제니와 의외의 한컷?…"하하하" 함박웃음 [TEN★]`,
                      "body" : "배우 이정재와 블랙핑크 제니가 유쾌한 한컷으로 시선을 사로잡았다. 이정재는 14일 자신의 인스타그램에 여러 장의 사진을 게재했다. 사진 속 이정재는 '오징어게임'에 함께 출연한 정호연, 블랙핑크 제니, 배우 엘 패닝 등과 인증샷을 남겼다. 이는 최근 미국 LA LACMA에서 열린 '2021 LACMA 아트...",
                      "related" : 5,
                    },
                  ],
                }
              }
            ]
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