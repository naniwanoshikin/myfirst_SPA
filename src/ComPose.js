import React from 'react';
import posed from 'react-pose';

const Box = posed.div({
  visible: { // 表示後
    opacity: 1,
    x: 0,
    y: 0,
    // transition: {
    //   ease: 'easeIn',
    //   duration: 300
    // }
  },
  hidden: { // 表示前
    opacity: 0.1,
    y: '-90%',
  },
  draggable: true,
})

export default class Pose extends React.Component {
  state = {
    isVisible: false,
  };
  // unmount用
  handle;
  componentDidMount() {
    this.handle = setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 100);
    // console.log('home mount')
  }
  componentWillUnmount() {
    clearTimeout(this.handle);
  }
  render() {
    return (
      <Box pose={this.state.isVisible ? 'visible' : 'hidden'}
        style={{
          display: "inline-block",
          position: "relative",
          zIndex: "5",
        }}
      >
        <h1 className="mt-4">{this.props.name}</h1>
        <p className="">{this.props.comment}</p>
      </Box>
    );
  }
}
