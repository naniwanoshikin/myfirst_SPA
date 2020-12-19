import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Foot';
import Pose from './pose'; // pose
import { Anime } from './anime'; // anime
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
    <div className="home text-center">
      <Nav />
      <h1 id="home" className="mt-5" >HELLO WORLD</h1>
      <p id="construction">ただいま工事中。</p>
      <header className="">
        <h1 className="">Wellcome to myPage!</h1>
        <Anime />
        <Pose />
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
      <h1 id="about" className="mt-5">About</h1>
      <p>自己紹介です。</p>
      <div className="container py-2">
        <table className="table table-sm table-hover w-75 w-sm-50 my-5 mx-auto">
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
              <td>Picture</td>
            </tr>
          </tbody>
        </table>
        <ul className="pl-5">
          <li>2020/6 プログラミング開始</li>
          <li>2020/8 ポートフォリオ作成開始</li>
        </ul>
      </div>
      <Graph />
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
      <MyWork />
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
