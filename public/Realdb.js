// 公式によると RealDatabase の使用は非推奨のため使用中止中
import React from 'react';
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

// ナビ構成
export default class Bookdb extends React.Component {
  style = {
    fontSize: "70px",
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [], // ステート
    }
    this.getFireData = this.getFireData.bind(this); // ないとエラー出る
  }
  // firebaseにアクセスし、データ取得。
  getFireData() {
    let db = firebase.database(); // firebaseオブジェクトからdatabase()呼び出し
    let ref = db.ref('sample/'); // 参照
    let self = this;
    ref.orderByKey() // 並び替えメソッド
      .limitToFirst(3) // フィルターメソッド
      .on('value', (snapshot) => { // on 非同期処理
        self.setState({
          data: snapshot.val()
        });
      });
  }
  // tableデータの表示
  getTableData() {
    let result = [];
    if (this.state.data === undefined || this.state.data.length === 0) {
      return [<tr key="0"><th>NO data.</th></tr>];
    }
    for (let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th className="text-left py-1 px-3 mx-0 my-0">{this.state.data[i].ID}</th>
          <td className="text-left py-1 px-3 mx-0 my-0">{this.state.data[i].name}</td>
          <td className="text-left py-1 px-3 mx-0 my-0">{this.state.data[i].message}</td>
        </tr>);
    }
    return result;
  }
  render() {
    if (this.state.data.length === 0) {
      this.getFireData();
    }
    return (
      <table className="mx-auto my-4">
        <tbody>
          {this.getTableData()}
        </tbody>
      </table>
    );
  }
}
