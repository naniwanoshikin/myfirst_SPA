import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNav from './ComNav';
import MyFooter from './ComFoot';
import Block from './ComBlock'; // 浮き文字
import Moment from './ComMoment'; // 浮かび上がる文字
import PaperAnime from './PaperBoxAnime'; // 動いている物体
import PaperClick from './PaperClick';
import MyFalling from './animeFall'; // 落ちていく物体
import MyWork from './Work_1';
import MyContact from './Contact';
// import MyCrud from './fire/tsuyopon';
import MyWeight from './fire/weightness';
// import PoseList from './fire/poselist';
// import Likelist from './fire/trazemi';
// import Translate from './fire/translater';
import './css/App.css';

// Routing
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/db:id" component={Weight} />
    </div>
  </BrowserRouter>
)

// Home
const Home = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Hello"} x="-10rem" y="-8rem" w="" h="" o="0.2" fs="100px" r="" bc="" c="pink" />
      <div className="home">
        <div className="stroke">
          <Block m={"The\nStart\nOf\n2021"} x="8%" y="28%" w="0px" h="" o="0.2" fs="65px" r="" bc="" c="" />
        </div>
        <Block m="World" x="31%" y="37%" w="160px" h="180px" o="0.1" fs="25px" r="40px" bc="magenta" c="white" deg="90deg" />
        <Block m="" x="52%" y="52%" w="160px" h="60px" o="0.3" fs="30px" r="35px" bc="cyan" />
        <Block m="∩" x="49%" y="53%" w="90px" h="170px" o="0.5" fs="30px" r="5px" bc="#fffac2" />
        <PaperAnime />
        <PaperClick />
      </div>
      <MyFooter />
    </div>
  )
}
// About
const About = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Profile"} x="-12rem" y="-10rem" w="" h="" o="0.1" fs="120px" r="" bc="" c="" deg="-5deg" />
      <div className="about">
        <div className="container py-4">
          <p className="mt-2">自己紹介です</p>
          <table className="table table-sm table-hover w-75 w-sm-50 mb-5 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Masahiro</td>
              </tr>
              <tr>
                <td>From</td>
                <td>Osaka</td>
              </tr>
              <tr>
                <td>Hobby</td>
                <td>Picture<br />Running</td>
              </tr>
            </tbody>
          </table>
          <ul className="pl-5">
            <li>2020/6 プログラミング開始</li>
            <li>2020/8 ポートフォリオ作成開始</li>
          </ul>
        </div>
        <MyFalling />
      </div>
      <MyFooter />
    </div>
  )
}
// Work
const Work = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Portfolio"} x="-13rem" y="-5rem" w="0" h="0" o="0.2" fs="100px" r="" bc="" c="" deg="-5deg" />
      <MyWork />
      <MyFooter />
    </div>
  )
}

// Contact
const Contact = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Callme"} x="-9rem" y="-10rem" w="0" h="0" o="0.1" fs="110px" r="" bc="" c="" deg="-1deg" />
      <MyContact />
      <MyFooter />
    </div>
  )
}


// Weight
const Weight = props => {
  const { id } = props.match.params
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Weightne" + id + ""} x="-9rem" y="-7rem" fs="70px" o="0.1" w="100%"/>
      <div style={{ backgroundColor: "Teal", }}>
        {/* グラフ作成予定 */}
        <MyWeight />
        {/* ツヨポン */}
        {/* <MyCrud /> */}
        {/* いいねボタン */}
        {/* <Likelist /> */}
        {/* ？ */}
        {/* <PoseList /> */}
      </div>
      <MyFooter />
    </div>
  )
}

export default App;
