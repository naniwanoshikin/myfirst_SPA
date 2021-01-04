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
    <div className="home text-center">
      <Nav />
      <Pose name={""} comment={"Hello"} />
      <Paper x="5%" y="7%" w="" h="" o="0.2" fs="100px" r="" bc="" c="" m="Home" />
      <Paper x="7%" y="25%" w="0px" h="" o="0.1" fs="70px" r="" bc="" c="blue" m={"The\nStart\nOf\n2021"} />
      <header>
        <PaperAnime />
        <PaperClick />
        {/* x方向 y方向 たて 横 色 */}
        <Paper x="40%" y="38%" w="180px" h="130px" o="0.2" fs="25px" r="40px" bc="magenta" c="white" m="World" deg="90deg"/>
        <Paper x="52%" y="51%" w="160px" h="60px" o="0.3" fs="30px" r="35px" bc="cyan" m="" />
        <Paper x="49%" y="52%" w="100px" h="160px" o="0.5" fs="30px" r="5px" bc="#fffac2" m="∩" />
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
      <Pose name={""} comment={"Profile"} />
      <div className="container py-4">
        <Paper x="10%" y="10%" w="" h="" o="0.2" fs="120px" r="" bc="" c="white" m="About" deg="1deg"/>
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
      <Footer />
    </div>
  )
}
// Work
const Work = () => {
  return (
    <div className="work text-center">
      <Nav />
      <Pose name={""} comment={"Portfolio"} />
      <Paper x="8%" y="13%" w="0" h="0" o="0.2" fs="100px" r="" bc="" c="" m="Works" deg="0deg"/>
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
      <Pose name={""} comment={"Contact"} />
      <Paper x="5%" y="11%" w="0" h="0" o="0.1" fs="100px" r="" bc="" c="blue" m="Contact" deg="1deg"/>
      <Contactform />
      <Footer />
    </div>
  )
}

// DBデータ表示
const Practice = props => {
  const { id } = props.match.params
  return (
    <div className="text-center">
      <Nav />
      <Pose name={"firebase"} comment={id + "番目の記事です"} />
      <Crud />
      <Translate />
      {/* いいねボタン */}
      <Likelist />
      <PoseList />
      <div style={{
        backgroundColor: "tomato",
      }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  )
}

export default App;
