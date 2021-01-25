import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './ComNav'; // const
import { Footer } from './ComFoot'; // const
import Paper from './Paper'; // class
import Pose from './ComPose'; // class
import PaperClick from './PaperClick'; // class
import { PaperAnime } from './PaperAnime'; // const
import { Anime2 } from './anime2'; // anime const
import { MyWork } from './Work_1'; // const
import Contactform from './Contact'; // class
import { Crud } from './fire/crudstore.jsx'; // const
import PoseList from './fire/poselist'; // class
import { Likelist } from './fire/likelist'; // const
import Translate from './fire/translater'; // class
import logo from './img/logo.svg'; // ロゴ
import './css/App.css';

// Routing
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/db:id" component={Practice} />
    </div>
  </BrowserRouter>
)

// Home
const Home = () => {
  return (
    <div className="text-center">
      <Nav />
      <Pose comment={"Hello"} />
      <Paper x="10%" y="4%" w="" h="" o="0.2" fs="100px" r="" bc="" c="white" m="Home" />
      <div className="home">
        <Paper x="31%" y="37%" w="160px" h="180px" o="0.1" fs="25px" r="40px" bc="magenta" c="white" m="World" deg="90deg" />
        <Paper x="52%" y="52%" w="160px" h="60px" o="0.3" fs="30px" r="35px" bc="cyan" m="" />
        <Paper x="49%" y="53%" w="90px" h="170px" o="0.5" fs="30px" r="5px" bc="#fffac2" m="∩" />
        <div className="stroke">
          <Paper x="8%" y="28%" w="0px" h="" o="0.2" fs="65px" r="" bc="" c="" m={"The\nStart\nOf\n2021"} />
        </div>
        <PaperAnime />
        <PaperClick />
      </div>
      <Footer />
    </div>
  )
}
// About
const About = () => {
  return (
    <div className="text-center">
      <Nav />
      <Pose comment={"Profile"} />
      <Paper x="10%" y="10%" w="" h="" o="0.2" fs="120px" r="" bc="" c="white" m="About" deg="1deg" />
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
                <td>Picture</td>
              </tr>
            </tbody>
          </table>
          <ul className="pl-5">
            <li>2020/6 プログラミング開始</li>
            <li>2020/8 ポートフォリオ作成開始</li>
          </ul>
        </div>
        <Anime2 />
      </div>
      <Footer />
    </div>
  )
}
// Work
const Work = () => {
  return (
    <div className="text-center">
      <Nav />
      <Pose comment={"Portfolio"} />
      <Paper x="24%" y="11%" w="0" h="0" o="0.2" fs="100px" r="" bc="" c="" m="Works" deg="0deg" />
      <div className="work">
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
      <Pose comment={"Contact"} />
      <Paper x="5%" y="11%" w="0" h="0" o="0.1" fs="100px" r="" bc="" c="green" m="Contact" deg="-1deg" />
      <Contactform />
      <Footer />
    </div>
  )
}

// Practice
const Practice = props => {
  const { id } = props.match.params
  return (
    <div className="text-center">
      <Nav />
      <Pose name={"firebase"} comment={id + "番目の記事"} />
      <div style={{
        backgroundColor: "tomato",
      }}>
        <Crud />
        <Translate />
        {/* いいねボタン */}
        <Likelist />
        <PoseList />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  )
}

export default App;
