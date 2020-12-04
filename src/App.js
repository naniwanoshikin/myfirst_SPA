import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Foot';
import logo from './img/logo.svg'; // ロゴ
import Todo from './Todo'; // Todolist
import Graph from './Graph'; // Chart.js
import MyWork from './Work_1'; // Works
import Contactform from './Contact'; // ContactForm
import './css/App.css';

// Routing処理
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog/:id" component={Work} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
)

// Home
const Home = () => {
  return (
    <div className="text-center">
      <Nav />
      <h1 className="mt-5">Wellcome</h1>
      <header className="App-header">
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
    <div className="text-center">
      <Nav />
      <h1 className="mt-5">About</h1>
      <p>記事紹介です。</p>
      <p>使用言語（スキル）</p>
      <Graph />
      <h2>趣味</h2>
      <p>パルクール、写真</p>
      <Footer />
    </div>
  )
}
// Work
const Work = props => {
  const { id } = props.match.params
  return (
    <div className="work text-center">
      <Nav />
      <h1 id="city" className="mt-5">記事紹介</h1>
      <p style={{ color: "red" }}>{id}番目の記事です</p>
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
      <h1 id="contact" className="mt-5">お問い合わせ</h1>
      <p className="free mb-4" id="free">お気軽にご連絡ください。</p>
      <Contactform />
      <Footer />
    </div>
  )
}

export default App;
