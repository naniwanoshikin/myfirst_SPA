import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// 共通
import MyNav from './Nav';
import MyFooter from './Foot';
import Moment from './Moment'; // Nav上で動いて消え倒れる文字
// 各項目
import MyHome from './js/Home/Home';
import MyAbout from './js/About/About';
import MyWork from './js/Work/Work1';
import MyContact from './js/Contact/Contact';
// 体重管理
import MyWeight from './js/Weight/weightness';
import { AuthProvider } from "./js/Weight/index";
// ログイン
import PrivateRoute from './js/login/privateRoute'; // 認証
import myhome from './js/login/home';
import Login from './js/login/Login';
import SignUp from './js/login/SignUp';
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
      <AuthProvider>
        <BrowserRouter>
          <div>
            {/* ログイン */}
            <Route exact path="/signin" component={Login} />
            {/* 新規登録 */}
            <Route exact path="/signup" component={SignUp} />
            {/* マイページ（認証後） */}
            <PrivateRoute exact path="/home" component={myhome} />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
