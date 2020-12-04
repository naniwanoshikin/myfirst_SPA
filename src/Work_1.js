import React from 'react';
import photo1 from './img/aich1.JPG';
import photo2 from './img/aich2.JPG';
import photo3 from './img/aich3.JPG';
import photo4 from './img/aich4.JPG';
import TheWork from './Work_2';

const WorkList = [
  {
    id: 0,
    name: "一宮",
    intro: "ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！ここにいきたいです！",
    img: photo1,
  },
  {
    id: 1,
    name: "岩倉",
    intro: "カフェサイトです！！！カフェサイトです！！！カフェサイトです！！！カフェサイトです！！！カフェサイトです！！！カフェサイトです！！！カフェサイトです！！！",
    img: photo2,
  },
  {
    id: 2,
    name: "江南",
    intro: "こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！こんばんは！！",
    img: photo3,
  },
  {
    id: 3,
    name: "小牧",
    intro: "３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！３択クイズです！！",
    img: photo4,
  },
];

class MyWork extends React.Component {

  render() {
    return (
      <div className="py-4 my-4 mx-3">
        {WorkList.map((item) => {
          return (
            <TheWork
              key={item.id}
              id={item.id + 1}
              name={item.name}
              intro={item.intro}
              img={item.img}
            />
          )
        })}
      </div>
    );
  }
}

export default MyWork;
