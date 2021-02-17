import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/spa.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/Blog.jpg';
import photo5 from './img/sai.jpg';
import TheWork from './Work_2';

// 値
const workLists = [
  {
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "お手軽に管理できるTodoリストを作成。一応LPです。",
    intro2: "Html, Sass, JavaScript, Firestore, jQuery, Chart.js\nHosting: Firebase",
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
    intro2: "Html, Sass, Bootstrap, React\nSlack, Firebase",
    img: photo2,
    date: "2020.12-",
    skill: [
      { name: '2020.12', Html: 70, Sass: 55, Bootstrap: 35, React: 40 },
      { name: '2021.01', Html: 75, Sass: 55, Bootstrap: 40, React: 45 },
      { name: '2021.02', Html: 80, Sass: 60, Bootstrap: 45, React: 50 },
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
    link: "#",
    intro: "少し描いてみました。",
    intro2: "Adobe Fresco",
    img: photo5,
    date: "2021.02-",
    skill: [
      { name: '2020.06', Fresco: 5 },
      { name: '2021.01', Fresco: 20 },
    ],

  },
];

/**
 * https://... を<a href="">に格納 + 改行
 * @params  str
 * @return {String} 文字列"<a><br>"
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


export const MyWork = () => {
  return (
    <div className="container px-0 py-4">
      <div className="row mx-auto">
        {workLists.map((list, i) => {
          return (
            <TheWork
              key={i}
              id={i}
              name={list.name}
              link={list.link}
              img={list.img}
              intro={strTag(((list.intro)))} // 文字列
              intro2={newLineHtml(list.intro2)} // html要素
              date={list.date}
              skill={list.skill} // recharts
            />
          )
        })}
      </div>
    </div>
  );
}
