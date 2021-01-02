import React from 'react';

export default class Paper extends React.Component {
  render() {
    return (
      <div style={{
        fontFamily: "Boogaloo",
        position: "absolute",
        zIndex: "3",
        left: this.props.x,
        top: this.props.y,
        fontSize: this.props.fs,
        width: this.props.w,
        height: this.props.h,
        backgroundColor: this.props.bc,
        color: this.props.c,
        borderRadius: this.props.r,
        opacity: this.props.o,
      }}>{this.props.m}</div>
    );
  }
}
