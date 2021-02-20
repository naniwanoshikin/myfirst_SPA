import React from 'react';
import posed from 'react-pose';
import Block from './ComBlock';

const rand1 = (Math.floor(Math.random() * 5) - 3) * 2; //  -6 ~ 6
const rand2 = (Math.floor(Math.random() * 5) - 3) * 2;
console.log(rand1);
console.log(rand2);

const Box = posed.div({
  hidden: { // 表示前
    opacity: 1,
    x: 0,
    y: 0,
  },
  visible: { // 表示後
    opacity: 0,
    x: ({ offset }) => offset * rand1,
    y: ({ offset }) => offset * rand2,
    // y: '45%', // なぜかできん。。
    transition: {
      ease: 'easeIn',
      duration: 2000
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
  componentWillUnmount() {
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
