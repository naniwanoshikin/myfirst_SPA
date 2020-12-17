import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import config from './config';
import PoseList from './poselist';
import Likelist from './likelist';

// firebase使用
firebase.initializeApp(config);
const db = firebase.firestore();
const collection = db.collection('users');

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

// constructor(props) {
//   super(props);
//   this.state = {
//     // users: auser,
//     userName: '',
//     count: 0,
//   };
// };

const Sampledb = () => {

  // 表示
  const [users, setUsers] = useState([]);
  const userList = users.map(user => {
    return (
      <li key={user.userId}>
        {/* {user.userId.substr(0, 3)} */}
        {user.name}({user.age})-{user.locate}
      </li>
    );
  });

  // 取得機能
  const handleGet = async () => {
    const auser = [];
    const snap = await collection.get();
    snap.forEach(doc => {
      auser.push({
        userId: doc.id,
        ...doc.data(), // スプレッド演算子
      });
      console.log(doc.id, ':', doc.data());
    })
    console.log('get!');
    setUsers(auser);
  }

  // 追加機能
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const handleAdd = async () => {
    // await collection
    //   .doc('1')
    //   .get()
    //   .then((doc) => { // then がある = promise = awaitが使える
    //     console.log('docdata:', doc.data());
    //   });
    if (!userName) {
      console.log('名前が空です');
    }
    if (!age) {
      console.log('年齢が空です');
    }
    const parsedAge = parseInt(age, 10); // string → int
    if (age && isNaN(parsedAge)) {
      console.log('年齢は半角でお願いします');
    }
    if (!userName || isNaN(parsedAge)) {
      return;
    }
    const ref = await collection.add({
      name: userName,
      age: parsedAge,
      locate: 'america',
    });
    // const data = await ref.get().data(); // なぜかできず
    // , { merge: true }) // 情報更新したものだけ上書き
    console.log(ref.id, (await ref.get()).data());
    console.log('ok');
    setUserName(''); // 空にする
    setAge('');
  }

  // 更新機能
  const [docId, setDoc] = useState('');
  const handleUpdate = async () => {
    if (!docId) {
      console.log('Idが空です');
      return;
    }
    const newData = {};
    if (userName) {
      newData['name'] = userName;
    }
    if (age) {
      newData['age'] = parseInt(age, 10);
    }
    try {
      await collection.doc(docId).update(newData);
      setUserName('');
      setAge('');
      setDoc('');
      console.log(docId, 'updated!')
    } catch (error) {
      console.error(error);
    }
  }
  // 削除機能
  const handleDelete = async () => {
    if (!docId) {
      console.log('Idが空です');
      return;
    }
    try {
      await collection.doc(docId).delete();
      setUserName('');
      setAge('');
      setDoc('');
      console.log(docId, 'delete!')
    } catch (error) {
      console.error(error);
    }
  }

  // 更新を検知する（自動でcallback関数が実行される）
  useEffect(() => {
    const unsubscribe = collection
      // .where('age', '>=', 2) // 条件
      .orderBy('age', 'desc') // default asc
      .limit(4)
      .onSnapshot((shot) => {
        console.log('mounted');
        shot.forEach(doc => {
          console.log(doc.id, doc.data());
        })
        const auser = shot.docs.map(doc => {
          return {
            userId: doc.id,
            ...doc.data()
          }
        });
        setUsers(auser);
      });
    return () => {
      unsubscribe();
    };
  }, []); // 第二引数に[]と書いたらunmountedされた。

  return (
    <div className="mx-auto my-4">
      <h2>hello</h2>
      <div>
        <div className="d-inline-block mx-5">
          <label htmlFor="namae">名前：</label>
          <input type="text" id="namae" autoComplete="off"
            value={userName}
            onChange={e => { setUserName(e.target.value) }}
          /><br />
          <label htmlFor="age">年齢：</label>
          <input type="text" id="age" autoComplete="off"
            value={age}
            onChange={e => { setAge(e.target.value) }}
          /><br />
          <label htmlFor="doc">DocId：</label>
          <input type="text" id="doc" autoComplete="off"
            value={docId}
            onChange={e => { setDoc(e.target.value) }}
          />
        </div>
      </div>
      <div>
        <div className="d-inline-block">
          {/* <button onClick={handleGet}>取得</button> */}
          <button onClick={handleAdd}>追加</button>
          <button onClick={handleUpdate}>更新</button>
          <button onClick={handleDelete}>削除</button>
        </div>
      </div>
      <div className="my-2">
        <ul className="d-inline-block text-left">{userList}</ul>
      </div>
      {/* <PoseList /> */}
      {/* いいねボタン */}
      {/* <Likelist count={state.count} /> */}
    </div>
  );
}

export default Sampledb;
