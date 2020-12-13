import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Foot';
import logo from './img/logo.svg'; // ロゴ
import Translate from './translater'; // Translate
import Todo from './Todo'; // Todolist
import Graph from './Graph'; // Chart.js
import MyWork from './Work_1'; // Works
import Contactform from './Contact'; // ContactForm
import './css/App.css';
// import firebase from 'firebase/app'
import Sampledb from './fire/firestr.jsx'; // firestore

// Routing処理
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/db:id" component={Data} />
    </div>
  </BrowserRouter>
)

// RDBSデータ表示
// functional Component
const Data = props => {
  const { id } = props.match.params
  return (
    <div className="text-center">
      <Nav />
      <h1 className="mt-5">firebase</h1>
      <p>{id}番目の記事です</p>
      <Sampledb />
      <Footer />
    </div>
  )
}

// Home
const Home = () => {
  return (
    <div className="text-center">
      <Nav />
      <h1 className="mt-5" >HELLO WORLD</h1>
      <header className="App-header">
        <Translate />
        <Todo />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
  )
}
// About
const About = () => {
  return (
    <div className="about text-center">
      <Nav />
      <h1 className="mt-5">About</h1>
      <p>自己紹介です。</p>
      <div className="container my-3">
        <table className="table table-sm table-hover w-75 w-sm-50 my-5 mx-auto">
          <tbody>
            <tr>
              <td>Name</td>
              <td>SHIKITTI</td>
            </tr>
            <tr>
              <td>From</td>
              <td>Osaka</td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>picture</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>2020/6 プログラミング開始</li>
        </ul>
      </div>
      <div className="my-4">
        <Graph />
      </div>
      <Footer />
    </div>
  )
}
// Work
const Work = () => {
  return (
    <div className="work text-center">
      <Nav />
      <h1 id="work" className="mt-5" style={{ color: "red" }}>Works</h1>
      <p>ポートフォリオ作品です。</p>
      <div className="container px-0 py-4">
        <MyWork />
      </div>
      <Footer />
    </div>
  )
}

// Contact
const Contact = () => {
  return (
    <div className="text-center">
      <Nav />
      <h1 id="contact" className="mt-5">Contact</h1>
      <p className="free mb-4" id="free">お気軽にご連絡ください。</p>
      <Contactform />
      <Footer />
    </div>
  )
}

export default App;
