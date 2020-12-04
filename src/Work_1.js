import React from 'react';
import photo1 from './img/LP.jpg';
import photo2 from './img/SPA.jpg';
import photo3 from './img/aich3.JPG';
import TheWork from './Work_2';

const WorkList = [
  {
    id: 0,
    name: "LPページ",
    link: "https://myportfolio-80107.web.app",
    intro: "初回作品としてLPを作成しました！その中で、お手軽に管理できるTodoリストをカバーに作りました。",
    intro2: "HTML & CSS JavaScript （Todolist, 英訳機能） React.js (お問い合わせ) Sass jQuery (スクロール、トップダウンメニュー) Chart.js",
    img: photo1,
  },
  {
    id: 1,
    name: "SPAページ",
    // link: "https://spapf-24842.web.app/",
    intro: "SPAサイトを作りました。静的にサイトを作っています？？",
    intro2: "第二回作品です！",
    img: photo2,
  },
  {
    id: 2,
    name: "工事中",
    // link: "https://myportfolio-80107.web.app",
    intro: "こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！",
    intro2: "未公開です！",
    img: photo3,
  },
  // {
  //   id: 3,
  //   name: "一宮",
  //   intro: "ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！",
  // introof: "未公開です！",
  //   img: photo1,
  // },
];

class MyWork extends React.Component {

  render() {
    return (
      <div className="row">
        {WorkList.map((item) => {
          return (
            <TheWork
              key={item.id}
              id={item.id + 1}
              name={item.name}
              intro={item.intro}
              intro2={item.intro2}
              img={item.img}
              link={item.link}
            />
          )
        })}
      </div>
    );
  }
}

export default MyWork;
