import React from 'react';

export default class Paper extends React.Component {
  style = {};
  constructor(props) {
    super(props);
    this.message = props.m;
    this.style = {
      position: "absolute",
      zIndex: "3",
      left: props.x,
      top: props.y,
      fontSize: props.fs,
      width: props.w,
      height: props.h,
      backgroundColor: props.bc,
      borderRadius: props.r,
      opacity: props.o,
    }
  }
  render() {
    return (
      <div style={this.style}>{this.message}</div>
    );
  }
}
