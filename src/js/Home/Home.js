import React from 'react';
import Block from './Block'; // 文字
import PaperClick from './ClickPaper'; // クリックすると紙が出る
import PaperAnime from './PaperBoxAnime'; // 回転物体

const Home = () => {
  return (
    <div className="home">
      <div className="stroke">
        <Block m={"The\nStart\nOf\n2021"} x="8%" y="28%" w="0" h="" o="0.2" fs="65px" c="" />
      </div>
      <Block m="World" x="33%" y="39%" w="130px" h="180px" o="0.1" fs="25px" r="20px" bc="magenta" c="white" deg="90deg" />
      <Block m="" x="52%" y="52%" w="160px" h="60px" o="0.3" fs="30px" r="35px" bc="cyan" />
      <Block m="∩" x="49%" y="53%" w="90px" h="170px" o="0.5" fs="30px" r="5px" bc="#fffac2" />
      <PaperClick />
      <PaperAnime />
    </div>
  )
}

export default Home;