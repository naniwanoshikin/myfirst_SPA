import React from 'react';
import posed from 'react-pose';
import logo from './img/logo.svg'; // ロゴ

// 背景
const box = {
  display: "block",
  width: "30vw",
  height: "15vh",
  backgroundColor: "tomato",
  zIndex: "5",
}
// ロゴ
const Applogo = {
  height: "100px",
}

const props = {
  visible: {
    opacity: 1,
    x: 0,
    // transition: {
    //   ease: 'easeIn',
    //   duration: 300
    // }
  },
  hidden: {
    opacity: 0,
    // x: '50%',
  },
  draggable: true,
}
const Box = posed.div(props)

export default class Pose extends React.Component {

  // unmount用
  handle;

  state = {
    isVisible: false,
  };
  // 表示される毎に実行
  componentDidMount() {
    this.handle = setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
    console.log('home mount')
  }
  componentWillUnmount() {
    clearTimeout(this.handle);
    console.log('home unmount')
  }
  render() {
    return (
      <Box style={box} pose={this.state.isVisible ? 'visible' : 'hidden'}>
        <img src={logo} style={Applogo} alt="logo" />
        <p>浮きます</p>
      </Box>
    );
  }
}
