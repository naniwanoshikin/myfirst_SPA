import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNav from './ComNav';
import MyFooter from './ComFoot';
import Block from './ComBlock'; // 浮き文字
import Moment from './ComMoment'; // アニメ文字
import PaperClick from './PaperClick';
import PaperAnime from './PaperBoxAnime'; // 回転物体
import MyFalling from './animeFall_1'; // 落ちていく物体
import MyWork from './Work_1';
import MyContact from './Contact';
import MyWeight from './weight/weightness';
import MyLogin from './login/app_login';
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
      <Route path="/signin" component={Login} />
    </div>
  </BrowserRouter>
)


const rand3 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand4 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand5 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand6 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand7 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6

// Home
const Home = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Hello"} x="-10rem" y="-8rem" o="0.3" fs="110px" bc="" c="pink" offset={rand3} />
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
      <MyFooter />
    </div>
  )
}
// About
const About = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Profile"} x="-12rem" y="-10rem" o="0.2" fs="120px" bc="skyblue" c="" deg="-5deg" offset={rand4} />
      <div className="about">
        <div className="container py-4">
          <table className="table table-sm table-hover w-75 w-sm-50 m-5 mx-auto">
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
            <li>2020/12 本サイト作成開始</li>
          </ul>
        </div>
      </div>
      <MyFalling />
      <MyFooter />
    </div>
  )
}

// Work
const Work = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Portfolio"} x="-13rem" y="-7rem" o="0.2" fs="100px" r="5px" bc="blue" c="" deg="-5deg" offset={rand5} />
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
      <Moment comment={"Callme"} x="-11rem" y="-9rem" o="0.2" fs="110px" r="10px" bc="green" c="" deg="-1deg" offset={rand6} />
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
      <Moment comment={"Weight" + id} x="-13rem" y="-7rem" fs="90px" o="0.2" w="100%" c="yellow" offset={rand7} />
      {/* 体重管理 */}
      <MyWeight />
      <MyFooter />
    </div>
  )
}

// Login
const Login = () => {
  return (
    <div className="text-center">
      <MyNav />
      <Moment comment={"Login"} x="-13rem" y="-7rem" fs="90px" o="0.2" w="100%" c="yellow" offset={rand7} />
      <MyLogin />
      <MyFooter />
    </div>
  )
}

export default App;
