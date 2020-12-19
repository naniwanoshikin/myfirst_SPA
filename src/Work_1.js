import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/SPA.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/cafe.jpg';
import TheWork from './Work_2';

// 参考
const link = "https://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn";

const WorkList = [
  {
    id: 0,
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "お手軽に管理できるTodoリストを作成。\n一応LPです！",
    intro2: "HTML & CSS, Sass\n生JavaScript+firestore（→Todolist）\njQuery (→scroll, トップダウンメニュー)\nChart.js\nReact.js (→お問い合わせ)\nHosting:firebase",
    img: photo1,
    date: "2020.9-",
  },
  {
    id: 1,
    name: "CAFE（工事中）",
    link: "https://myfirstlp.web.app/pages/cafe.html",
    intro: "料理注文用アプリを作成しました。",
    intro2: "生PHP。\n未Hosting",
    img: photo4,
    date: "2020.10-",
  },
  {
    id: 3,
    name: "本サイト",
    link: "https://spapf-24842.web.app/",
    intro: "SPAサイト（React）を作成中。\n年末完了予定。",
    intro2: "HTML & CSS, Sass\nBootstrap 4.5.0\nnode.js 14.8.0\nnpm 6.14.9\nReact 16.13.1\nChart.js\nSlack通知\nHosting:firebase",
    img: photo2,
    date: "2020.12-",
  },
  {
    id: 4,
    name: "チャットbot",
    link: "https://chatbot-18322.web.app",
    intro: "chatbotアプリ。\n参考：正社員エンジニアの動画。",
    intro2: `React \nfirebase cloud Functions, \nMaterial UI\nHosting:firebase\n参考:${link}`,
    img: photo3,
    date: "2020.12-",
  },
];

const MyWork = () => {
  return (
    <div className="container px-0 py-4">
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
    </div>
  );
}

export default MyWork;
