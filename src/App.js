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
      <Pose name={""} comment={"The start of 2021"} />
      <Paper x="14%" y="9%" w="0" h="0" o="0.1" fs="120px" r="25px" c="blue" m="Hello" />
      <header>
        <PaperAnime />
        <PaperClick />
        {/* x方向 y方向 たて 横 色 */}
        <Paper x="14%" y="38%" w="270px" h="160px" o="0.2" fs="40px" r="40px" bc="magenta" c="white" m="World" />
        <Paper x="36%" y="50%" w="220px" h="100px" o="0.4" fs="30px" r="35px" bc="cyan" />
        <Paper x="31%" y="52%" w="150px" h="160px" o="0.4" fs="30px" r="5px" bc="#fffac2" m="∩" />
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
      <Pose name={""} comment={"自己紹介です。"} />
      <div className="container py-4">
        <Paper x="16%" y="4%" w="" h="" o="0.1" fs="150px" r="25px" c="cyan" m="About" />
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
      <Pose name={""} comment={"作品です。"} />
      <Paper x="22%" y="12%" w="0" h="0" o="0.2" fs="100px" r="25px" c="" m="Works" />
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
      <Pose name={""} comment={"お気軽にご連絡ください。"} />
      <Paper x="5%" y="0%" w="0" h="0" o="0.1" fs="120px" r="25px" c="yellow" m="Contact" />
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
