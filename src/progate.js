import React from 'react';

// Counter情報を管理
export default class Bpp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "忍者わんこ", count: 0 };
  }
  handleClick(name, count) {
    this.setState({ name: name });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.name}が{this.state.count}匹</h1>
        <button onClick={() => { this.handleClick('ひつじ仙人') }}>ひつじ仙人</button>
        <button onClick={() => { this.handleClick('忍者わんこ') }}>にんじゃわんこ</button>
      </div>
    );
  }
}