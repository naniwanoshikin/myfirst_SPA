import React from 'react';
import TheWork from './Work2';
import photo1 from '../../img/1 LP.jpg';
// import photo2 from '../../img/2 SPA.jpg';
import photo3 from '../../img/3 CHAT.jpg';
import photo5 from '../../img/5 pkmap.jpg';
import photo51 from '../../img/5 tweet.jpg';
// import photo6 from '../../img/6 weight.png';

// 値: (name, link, intro, intro2, img, date, skill)
const skills = [
  [
    "Todoリスト", "https://myfirstlp.web.app",
    "初回の作品。",
    "HTML, CSS, Sass, JavaScript, Firestore, jQuery, Chart.js\nFirebase", photo1, "2020.9-", [
      { name: '2020.09', Html: 55, Sass: 30, JS: 30, jQuery: 10 },
      { name: '2020.10', Html: 60, Sass: 35, JS: 40, jQuery: 20 },
      { name: '2020.11', Html: 70, Sass: 55, JS: 60, jQuery: 30 },
    ],
  ],
  // [
  //   "本サイト", "https://spapf-24842.web.app/",
  //   "本サイトです。",
  //   "React, Bootstrap\nFirebase, Slack", photo2, "2020.12-", [
  //     { name: '2020.12', React: 20, Bootstrap: 25, firebase: 15, },
  //     { name: '2021.01', React: 30, Bootstrap: 40, firebase: 20, },
  //     { name: '2021.02', React: 40, Bootstrap: 45, firebase: 30, },
  //   ],
  // ],
  [
    "ChatBot", "https://chatbot-18322.web.app",
    "正社員エンジニアの,ゼミhttps://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnnを参考に作成。", `React, Cloud Functions, Material UI\nFirebase`, photo3, "2020.12-", [
      { name: '2020.12', React: 20, Bootstrap: 25, firebase: 15, },
      { name: '2021.01', React: 30, Bootstrap: 40, firebase: 20, },
      { name: '2021.02', React: 40, Bootstrap: 45, firebase: 30, },
    ]
  ],
  // [
  //   "マイブログス", "https://shikiblog.herokuapp.com/", "ブログ始めます。\n初ブログです。テーマ未定。", "Laravel, Bootstrap, Heroku", photo4, "2021.01-", [
  //     { name: '2020.01', Laravel: 10, Bootstrap: 35, Heroku: 5 },
  //     { name: '2021.02', Laravel: 20, Bootstrap: 40, Heroku: 10 },
  //     { name: '2021.03', Laravel: 30, Bootstrap: 45, Heroku: 15 },
  //   ],
  // ],
  [
    "Twitter APP", "https://shikintweet.herokuapp.com/",
    "railsチュートリアルの単なる延長です。\n呟きで世界は変わる。",
    "Ruby on Rails, JavaScript, jQuery, \nHeroku",
    photo51, "2021.07-", [
      { name: '2021.06', rails: 5, ajax: 15, },
      { name: '2021.07', rails: 20, ajax: 20, },
      { name: '2021.08', rails: 30, ajax: 25, },
    ],
  ],
  [
    "pkmap", "https://pk-map.herokuapp.com/",
    "パルクール専用サイトを作成しました。\n地図でスポットを探して、外で動きましょう！",
    "Ruby on Rails, JavaScript, jQuery, \nGoogle Maps API \nHeroku ",
    photo5, "2022.02-", [
      { name: '2022.02', rails: 5, api: 5, },
      { name: '2022.03', rails: 20, api: 20, },
    ],
  ],
  // [
  //   "体重管理", "/db7", "右上のアイコンから入れます🙇‍♂️", "recharts Cloud firestore", photo6, "2021.02-", [
  //     { name: '2021.02', recharts: 5, firestore: 5 },
  //     { name: '2021.03', recharts: 20, firestore: 10 },
  //   ]
  // ],
]

// -> 配列にオブジェクトを入れる
const workLists = [];
for (let i = 0; i < skills.length; i++) {
  workLists[i] = {
    name: skills[i][0],
    link: skills[i][1],
    intro: skills[i][2],
    intro2: skills[i][3],
    img: skills[i][4],
    date: skills[i][5],
    skill: skills[i][6], // recharts
  };
}


/**
 * https://... を<a href="">に格納 + 改行
 * @params  str
 * @return {String} 文字列"<a>...<br>"
 */
const strTag = (string) => {
  const pattern = /,\s?(.+)(https?:\/\/[\w\d/%#$&?()~_.=+-]+)/g;
  const tag = '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>';
  return string.replace(pattern, tag).replace(/\n/g, '<br/>');
}
/**
*  改行
* @params  str
* @return {Html} html化
*/
const newLineHtml = (string) => {
  return string.split('\n').map((x, i) => (<p className="mb-0" key={i}>{x}</p>));
}

const MyWork = () => {
  return (
    <div className="work container px-0 py-2">
      <div className="row mx-auto">
        {workLists.map((list, i) => {
          return (
            <TheWork
              key={i}
              id={i}
              date={list.date}
              name={list.name}
              link={list.link}
              img={list.img}
              intro={strTag(((list.intro)))} // 文字列
              intro2={newLineHtml(list.intro2)} // html要素
              skill={list.skill}
            />
          )
        })}
      </div>
    </div>
  );
}

export default MyWork;