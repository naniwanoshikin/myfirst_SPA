// progate 未使用
import React from 'react';

// Counter情報を管理
class Progate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // ①stateの定義（初期値）（一番大事）
      name: "忍者わんこ",
      count: 0,
    };
  }
  handleClick(name, count) {
    this.setState({ name: name });
    this.setState({ count: this.state.count + 1 }); // ③stateの変更
  }
  render() {
    // ここがVirtual DOM（仮想DOM: ブラウザのレンダリングに影響を与えない操作）
    // JSXをreturn。ブラウザのレンダリングと別管理→効率よくDOM操作できる
    // returnの外はJSでかける。（constはクラスの外でもかける）
    console.log(this.state);
    return ( // 渡せる要素は１つだけ。
      // JSX：return直下の<div>で囲まれた部分。→可読性が高くなる
      // JS内でHTMLを簡単に記述するための言語（”JSの拡張言語”。JSではない）
      // 変数名は全てキャメルケースでかこう。
      <div>
        {/* ②stateの表示 */}
        <h1>{this.state.name}が{this.state.count}匹</h1>
        <button onClick={() => { this.handleClick('ひつじ仙人') }}>ひつじ仙人</button>
        <button onClick={() => { this.handleClick('忍者わんこ') }}>にんじゃわんこ</button>
      </div>
      // ブラウザはJSXを理解できない為、JSX→JS に翻訳する（トランスパイラ）
      // （TypeScript, Babelなどもそう）
    );
  }
}

export default Progate;