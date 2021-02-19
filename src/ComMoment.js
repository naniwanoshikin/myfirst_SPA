import React from 'react';
import posed from 'react-pose';
import Block from './ComBlock';


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
    const style = {
      display: "inline-block",
      position: "relative",
      zIndex: "3",
      fontFamily: "Boogaloo",
    }
    return (
      <Box style={style} pose={this.state.isVisible ? 'visible' : 'hidden'}>
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
