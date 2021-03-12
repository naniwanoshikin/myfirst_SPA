import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNav from './ComNav';
import MyFooter from './ComFoot';
import Moment from './ComMoment'; // アニメ文字
import MyHome from './Home';
import MyAbout from './About';
import MyWork from './Work_1';
import MyContact from './Contact';
import MyWeight from './weight/weightness';
import Auth from './login/privateRoute'; // 認証
import myhome from './login/home';
import Login from './login/Login';
import SignUp from './login/SignUp';
import './css/App.css';

// Routing
const App = () => (
  <BrowserRouter>
    <div className="text-center">
      <MyNav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/db:id" component={Weight} />
      <Route exact path="/signin" component={MyLogin} />
      <MyFooter />
    </div>
  </BrowserRouter>
)

const rand3 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand4 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand5 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand6 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand7 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6


const Home = () => {
  return (
    <>
      <Moment comment={"Hello"} x="-10rem" y="-8rem" o="0.3" fs="110px" bc="" c="pink" offset={rand3} />
      <MyHome />
    </>
  )
}

const About = () => {
  return (
    <>
      <Moment comment={"Profile"} x="-12rem" y="-10rem" o="0.2" fs="120px" bc="skyblue" c="" deg="-5deg" offset={rand4} />
      <MyAbout />
    </>
  )
}

const Work = () => {
  return (
    <>
      <Moment comment={"Portfolio"} x="-13rem" y="-7rem" o="0.2" fs="100px" r="5px" bc="blue" c="" deg="-5deg" offset={rand5} />
      <MyWork />
    </>
  )
}

const Contact = () => {
  return (
    <>
      <Moment comment={"Callme"} x="-11rem" y="-9rem" o="0.2" fs="110px" r="10px" bc="green" c="" deg="-1deg" offset={rand6} />
      <MyContact />
    </>
  )
}

// 体重管理
const Weight = props => {
  const { id } = props.match.params
  return (
    <>
      <Moment comment={"Weight" + id} x="-13rem" y="-7rem" fs="90px" o="0.2" w="100%" c="yellow" offset={rand7} />
      <MyWeight />
    </>
  )
}

const MyLogin = () => {
  return (
    <>
      <Moment comment={"Login"} x="-13rem" y="-7rem" fs="90px" o="0.2" w="100%" c="yellow" offset={rand7} />
      <BrowserRouter>
        <div>
          <Auth>
            <Route exact path="/home" component={myhome} />
          </Auth>
          {/* ログイン */}
          <Route exact path="/signin" component={Login} />
          {/* 新規登録 */}
          <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
