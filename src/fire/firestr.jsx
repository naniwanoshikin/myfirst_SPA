import React from 'react';
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import PoseList from './poselist';
import Likelist from './likelist';

// Initialize Firebase: プロジェクト設定
const config = {
  // apiKey: "AIzaSyB14-DG8sd3KtcC6ECNLKLR7HrrKNphRZQ", // auth用
  // authDomain: "spapf-24842.firebaseapp.com",
  // databaseURL: "https://spapf-24842.firebaseio.com",
  projectId: "spapf-24842", //
  // storageBucket: "spapf-24842.appspot.com",
  // messagingSenderId: "408425213048", // プロジェクト番号 ※流出禁物
  // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  // measurementId: "G-8GSGZQ44ST"
};
firebase.initializeApp(config); // 初期化


// firebase使用
const db = firebase.firestore();
const collection = db.collection('users');
const _users = [];

function handleFetch() {
  // const [users, setUsers] = userState([]);
  collection
    .where('age', '<=', 30) // 条件
    .limit(2)
    .get()
    .then(snapshot => {    // 非同期処理
      snapshot.forEach(doc => {
        _users.push({
          userId: doc.id,
          ...doc.data(),
        });
        console.log(doc.id, ':', doc.data());
      })
    });
  // console.log('ok');
  // this.setState(_users);

  // const userList = users.map(user => {
  //   return (
  //     <li key={user.userId}>{user.name}:{user.age}, {user.locate}</li>
  //   );
  // });

}

class Sampledb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: _users,
      userName: '',
      count: 0,
    };
  };

  // ライフサイクルメソッド
  // カウントアップ
  // componentDidMount() {
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }
  // componentDidUpdate() {
  //   if (this.state.count > 10) {
  //     this.setState({count: 0});
  //   }
  // }
  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }
  // countUp = () => {
  //   this.setState({count: this.state.count + 1});
  // }
  
  setUserName(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handleAdd() {
    if (!this.userName) {
      console.log('空です');
      return;
    }
    collection.add({
      name: this.userName,
      age: '20',
      locate: 'america',
    }, { merge: true })
      .then(doc => { // promise
        console.log(`${doc.id} added`);
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
  render() {
    return (
      <div className="mx-auto my-4">
        <h2>hello</h2>
        <label htmlFor="namae">名前: </label>
        <input type="text" id="namae" autoComplete="off"
          value={this.userName}
          onChange={e => { this.setUserName(e) }}
        />
        <button onClick={handleFetch}>取得</button>
        <button onClick={this.handleAdd}>追加</button>
        {/* <ul>{this.userList}</ul> */}
        <PoseList />
        {/* いいねボタン */}
        <Likelist count={this.state.count} />
      </div>
    );
  }
}

export default Sampledb;
