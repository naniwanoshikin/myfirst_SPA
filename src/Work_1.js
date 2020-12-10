import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/SPA.jpg';
import photo3 from './img/aich1.JPG';
import photo4 from './img/cafe.jpg';
import TheWork from './Work_2';

const WorkList = [
  {
    id: 0,
    name: "LPサイト",
    link: "https://myfirstlp.web.app",
    intro: "初回作品として、お手軽に管理できるTodoリストを作りました。一応、LPです！firebaseでHosting。",
    intro2: "HTML & CSS, JavaScript（Todolist）, React.js (お問い合わせ), Sass, jQuery (スクロール、トップダウンメニュー), Chart.js",
    img: photo1,
    date: "2020.9-",
  },
  {
    id: 1,
    name: "CAFE（工事中）",
    link: "https://myfirstlp.web.app/pages/cafe.html",
    intro: "料理注文用アプリを作成しました。",
    intro2: "生PHP、バリデーションのみ",
    img: photo4,
    date: "2020.10-",
  },
  {
    id: 2,
    name: "工事中",
    link: "https://myfirstlp.web.app/pages/tetris.html",
    intro: "こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！",
    intro2: "未公開作品です！",
    img: photo3,
    date: "2020.10-",
  },
  {
    id: 3,
    name: "SPAサイト",
    link: "https://spapf-24842.web.app/",
    intro: "このSPAサイトを作りました。静的にサイトを作っています？？firebaseでHosting。",
    intro2: "HTML & CSS, Sass, Bootstrap 4.5.0, node.js 14.8.0, npm 6.14.9, React.js, Chart.js",
    img: photo2,
    date: "2020.12-",
  },
  {
    id: 4,
    name: "ChatBot",
    link: "https://chatbot-18322.web.app",
    intro: "正社員エンジニアの動画を参考にchatbot作成中。React, Slack通知, firebase, Material UI",
    intro2: `参考: https://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn`,
    img: photo3,
    date: "2020.12-",
  },
  // {
  //   id: 3,
  //   name: "一宮",
  //   intro: "ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！",
  // introof: "未公開です！",
  //   img: photo1,
  // date: "2020.10-",
  // },
];

class MyWork extends React.Component {

  render() {
    return (
      <div className="row mx-auto">
        {WorkList.map((list) => {
          return (
            <TheWork
              key={list.id}
              id={list.id}
              name={list.name}
              intro={list.intro}
              intro2={list.intro2}
              img={list.img}
              link={list.link}
              date={list.date}
            />
          )
        })}
      </div>
    );
  }
}

export default MyWork;
