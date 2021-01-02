import React from 'react';

// 改行（\n）
// (@param, @return) = (string, string)
const newLine = (str) => {
  return str.replace(/\n/g, "\n");
}

export default class Paper extends React.Component {
  render() {
    return (
      <div style={{
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
      }}>{newLine(this.props.m)}</div>
    );
  }
}
