import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/spa.jpg';
import photo3 from './img/CHAT.jpg';
import photo4 from './img/Blog.jpg';
import photo5 from './img/sai.jpg';
import TheWork from './Work_2';

const Lists = [
  {
    name: "Todoリスト",
    link: "https://myfirstlp.web.app",
    intro: "お手軽に管理できるTodoリストをJavaScriptで作成。一応LPです！",
    intro2: "HTML & CSS, Sass\n生JavaScript+firestore\njQuery\nChart.js\nReact.js\nHosting:firebase",
    img: photo1,
    date: "2020.9-",
  },
  {
    name: "本サイト",
    link: "https://spapf-24842.web.app/",
    intro: "Reactで作成(SPA)。\nfirebaseでデプロイ。",
    intro2: "HTML & CSS, Sass\nBootstrap 4.5.0\nnode.js 14.8.0\nnpm 6.14.9\nReact 16.13.1\nChart.js\nSlack\nHosting:firebase",
    img: photo2,
    date: "2020.12-",
  },
  {
    name: "ChatBot",
    link: "https://chatbot-18322.web.app",
    intro: "参考：某正社員エンジニアの「,チャンネル動画https://www.youtube.com/playlist?list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn」",
    intro2: `React\nfirebase cloud Functions,\nMaterial UI\nHosting:firebase`,
    img: photo3,
    date: "2020.12-",
  },
  {
    name: "マイブログス",
    link: "https://shikiblog.herokuapp.com/",
    intro: "今年からブログ始めます。初ブログです。Laravelで作成。テーマは未定。",
    intro2: "Laravel\nBootstrap\npostgresql\nHeroku",
    img: photo4,
    date: "2021.01-",
  },
  {
    name: "サイドン",
    link: "#",
    intro: "Adobe Fresco",
    intro2: "",
    img: photo5,
    date: "2021.02-",
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
        {Lists.map((list, i) => {
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
            />
          )
        })}
      </div>
    </div>
  );
}
