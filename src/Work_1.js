import React from 'react';
import TheWork from './Work_2';
import photo1 from './img/LP.jpg';
import photo2 from './img/spa.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/Blog.jpg';
import photo5 from './img/sai.jpg';
import photo6 from './img/weight.png';

// 値
const workLists = [
  {
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "お手軽に管理できるTodoリストを作成。一応LPです。",
    intro2: "HtmlCss, Sass, JavaScript, Firestore, jQuery, Chart.js\nHosting: Firebase",
    img: photo1,
    date: "2020.9-",
    // recharts
    skill: [
      { name: '2020.09', Html: 55, Sass: 30, JS: 30, jQuery: 10 },
      { name: '2020.10', Html: 60, Sass: 35, JS: 40, jQuery: 20 },
      { name: '2020.11', Html: 70, Sass: 55, JS: 60, jQuery: 30 },
    ],
  },
  {
    name: "本サイト",
    link: "https://spapf-24842.web.app/",
    intro: "Reactで作成！！",
    intro2: "React, Bootstrap\nFirebase, Slack",
    img: photo2,
    date: "2020.12-",
    skill: [
      { name: '2020.12', React: 20, Bootstrap: 25, firebase: 15, },
      { name: '2021.01', React: 30, Bootstrap: 40, firebase: 20, },
      { name: '2021.02', React: 40, Bootstrap: 45, firebase: 30, },
    ],
  },
  {
    name: "ChatBot",
    link: "https://chatbot-18322.web.app",
    intro: "参考：某正社員エンジニアの「,ゼミhttps://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn」",
    intro2: `React, Cloud Functions, Material UI\nFirebase`,
    img: photo3,
    date: "2020.12-",
    skill: [
    ],
  },
  {
    name: "マイブログス",
    link: "https://shikiblog.herokuapp.com/",
    intro: "ブログ始めます。\n初ブログです。テーマ未定。",
    intro2: "Laravel, Bootstrap, Heroku",
    img: photo4,
    date: "2021.01-",
    skill: [
      { name: '2020.01', Laravel: 10, Bootstrap: 35, Heroku: 5 },
      { name: '2021.02', Laravel: 20, Bootstrap: 40, Heroku: 10 },
      { name: '2021.03', Laravel: 30, Bootstrap: 45, Heroku: 15 },
    ],
  },
  {
    name: "サイドン",
    link: "#!",
    intro: "サイ",
    intro2: "Adobe Fresco",
    img: photo5,
    date: "2021.02-",
    skill: [
      { name: '2020.06', Fresco: 5 },
      { name: '2021.01', Fresco: 20 },
    ],

  },
  {
    name: "体重管理",
    link: "/db7",
    intro: "右上のアイコンから入れます🙇‍♂️",
    intro2: "recharts Cloud firestore",
    img: photo6,
    date: "2021.02-",
    skill: [
      { name: '2021.02', recharts: 5, firestore: 5 },
      { name: '2021.03', recharts: 20, firestore: 10 },
    ],

  },
];

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