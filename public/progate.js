// 未使用
/** js Doc
 * ①stateの定義（初期値）（一番大事）
 * ②表示 return内
 * ③変更 setState
 */

// import React from 'react';
// import logo from './img/logo.svg'; // ロゴ

// classコンポーネント
class Progate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "忍者わんこ",
      count: 0,
    };
  }
  handleClick(name, count) {
    this.setState({ name: name });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    // ここがVirtual(仮想) DOM: ブラウザのレンダリングに影響を与えない操作
    // returnの外はJSでかける。（constはクラスの外でもかける）
    console.log(this.state);
    return ( // 渡せる要素は１つ。ここでレンダリングされる。
      <div>
        <h1>{this.state.name}が{this.state.count}匹</h1>
        <button onClick={() => { this.handleClick('ひつじ仙人') }}>ひつじ仙人</button>
        <button onClick={() => { this.handleClick('忍者わんこ') }}>にんじゃわんこ</button>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Progate;