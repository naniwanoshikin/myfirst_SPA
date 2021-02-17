import React from 'react';

export default class Papers extends React.Component {
  data = [];
  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    };
    this.doAction = this.doAction.bind(this);
  }
  // クリックした位置情報を追加
  doAction(e) {
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({ x: x, y: y });
    this.setState({
      list: this.data
    });
  }
  draw(d, i) {
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "60px",
      height: "60px",
      backgroundColor: "#66f3",
      zIndex: "5",
      border: "1px dashed Teal",
    };
    return <div style={s} key={i}></div>;
  }
  // クリック範囲
  area = {
    width: "100vw",
    height: "70vh",
    // border: "1px solid blue",
  }
  render() {
    return (
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((e, i) => this.draw(e, i))}
      </div>
    )
  }
}
