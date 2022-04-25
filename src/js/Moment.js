import React from 'react';
import posed from 'react-pose';
import Block from './Home/Block';

const rand1 = (Math.floor(Math.random() * 5) - 2) * 3; //  ±6
const rand2 = (Math.floor(Math.random() * 5) - 2) * 3;
const rand3 = (Math.floor(Math.random() * 5) - 2) * 8;
// console.log(rand3);

const Box = posed.div({
  hidden: { // 表示前
    x: 0,
    y: 0,
    rotateX: 0,
    opacity: 1,
  },
  visible: { // 表示後
    x: ({ offset }) => offset * rand1,
    y: ({ offset }) => offset * rand2,
    rotateX: 90,
    rotateZ: rand3,
    opacity: 0.3,
    transition: {
      ease: 'easeIn',
      duration: 2500
    },
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
  componentWillUnmount() { // リソース開放
    clearTimeout(this.handle);
  }
  render() {
    const style = {
      display: "inline-block",
      position: "relative",
      zIndex: "3",
      fontFamily: "Boogaloo",
    }
    return (
      <Box style={style} pose={this.state.isVisible ? 'visible' : 'hidden'} offset={this.props.offset} >
        <Block
          m={this.props.comment}
          x={this.props.x}
          y={this.props.y}
          w={this.props.w}
          h={this.props.h}
          o={this.props.o}
          fs={this.props.fs}
          r={this.props.r}
          bc={this.props.bc}
          c={this.props.c}
          deg={this.props.deg}
        />
      </Box>
    );
  }
}
