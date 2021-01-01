import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/SPA.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/cafe.jpg';
import TheWork from './Work_2';
// import StrReplace from "react-string-replace";

// 改行（\n）
// (@param, @return) = (string, string)
const newLine = (string) => {
  return string.split('\n').map((x, i) => (<p className="mb-0" key={i}>{x}</p>));
}

// 参考
const link = "https://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn";

const WorkList = [
  {
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "お手軽に管理できるTodoリストを作成。\n一応LPです！",
    intro2: "HTML & CSS, Sass\n生JavaScript+firestore（→Todolist）\njQuery (→scroll, トップダウンメニュー)\nChart.js\nReact.js (→お問い合わせ)\nHosting:firebase",
    img: photo1,
    date: "2020.9-",
  },
  {
    name: "CAFE（工事中）",
    link: "https://myfirstlp.web.app/pages/cafe.html",
    intro: "料理注文用アプリを作成しました。\n未Hosting",
    intro2: "生PHP。\n未Hosting",
    img: photo4,
    date: "2020.10-",
  },
  {
    name: "本サイト",
    link: "https://spapf-24842.web.app/",
    intro: "SPAサイト（React）を作成中。\n年末完了予定。",
    intro2: "HTML & CSS, Sass\nBootstrap 4.5.0\nnode.js 14.8.0\nnpm 6.14.9\nReact 16.13.1\nChart.js\nSlack通知\nHosting:firebase",
    img: photo2,
    date: "2020.12-",
  },
  {
    name: "チャットbot",
    link: "https://chatbot-18322.web.app",
    intro: "chatbotアプリ。\n参考：正社員エンジニアの動画。",
    intro2: `React \nfirebase cloud Functions, \nMaterial UI\nHosting:firebase\n参考:${link}`,
    img: photo3,
    date: "2020.12-",
  },
];

// リンク変換：やり方わからない。。
// const ref = (array) => {
//   return (
//     <div>
//       <ul>
//         {array.map((item, i) => {
//           return (
//             <li key={i}>
//               {StrReplace(item, /(https?:\/\/\S+)/g, (match, i) => (
//                 <a href={match} key={i}>{match}</a>
//               ))}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// console.log(ref(WorkList));

export const MyWork = () => {
  return (
    <div className="container px-0 py-4">
      <div className="row mx-auto">
        {WorkList.map((list, i) => {
          return (
            <TheWork
              key={i}
              id={i}
              name={list.name}
              intro={newLine(list.intro)}
              intro2={newLine(list.intro2)}
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
