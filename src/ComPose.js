import React from 'react';
import posed from 'react-pose';
import Paper from './Paper'; // class

const style = {
  display: "inline-block",
  position: "relative",
  zIndex: "5",
  fontSize: "30px",
  color: "#fffac2",
  fontFamily: "Boogaloo",
}
const Box = posed.div({
  hidden: { // 表示前
    opacity: 0.1,
    y: '-15%',
  },
  visible: { // 表示後
    opacity: 1,
    // x: 0,
    y: 0,
    transition: {
      ease: 'easeIn',
      duration: 700
    }
  },
  draggable: true,
})

export default class Pose extends React.Component {
  state = {
    isVisible: false,
  };
  handle; // unmount用
  componentDidMount() {
    this.handle = setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 100);
    // console.log('mount')
  }
  componentWillUnmount() {
    clearTimeout(this.handle);
  }
  render() {
    return (
      <Box pose={this.state.isVisible ? 'visible' : 'hidden'}>
        {/* <Paper style={style} x="10%" y="4%" w="" h="" o="0.2" fs="100px" bc="" m={this.props.comment} /> */}
        <p className="mb-1" style={style} >{this.props.comment}</p>
      </Box>
    );
  }
}
