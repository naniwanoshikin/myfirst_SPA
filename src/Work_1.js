import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/SPA.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/cafe.jpg';
import TheWork from './Work_2';

const WorkList = [
  {
    id: 0,
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "初回作品として、お手軽に管理できるTodoリストを作りました。JavaScriptです。\n一応LPです！\nHosting:firebase",
    intro2: "HTML & CSS\nJavaScript（Todolist）\nSass\nReact.js (お問い合わせ)\njQuery (スクロール、トップダウンメニュー)\nChart.js",
    img: photo1,
    date: "2020.9-",
  },
  {
    id: 1,
    name: "CAFE（工事中）",
    link: "https://myfirstlp.web.app/pages/cafe.html",
    intro: "料理注文用アプリを作成しました。\nPHP。\n未Hosting",
    intro2: "生PHPです。バリデーションのみ",
    img: photo4,
    date: "2020.10-",
  },
  {
    id: 3,
    name: "本サイト",
    link: "https://spapf-24842.web.app/",
    intro: "ReactにてSPAサイトを作成中（年末中）。\n静的にサイトを作っています？？\nSlack通知\nHosting:firebase",
    intro2: "HTML & CSS\nSass\nBootstrap 4.5.0\nnode.js 14.8.0\nnpm 6.14.9\nReact.js\nChart.js",
    img: photo2,
    date: "2020.12-",
  },
  {
    id: 4,
    name: "チャットbot（参考）",
    link: "https://chatbot-18322.web.app",
    intro: "chatbotアプリを作成。\n参考：正社員エンジニアの動画。\nReact \nfirebase cloud Functions, \nMaterial UI\nHosting:firebase",
    intro2: `参考: https://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn`,
    img: photo3,
    date: "2020.12-",
  },
];

const MyWork = () => {
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

export default MyWork;
