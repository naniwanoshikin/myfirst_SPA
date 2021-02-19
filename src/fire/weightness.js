import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import config from './config';
import Graph from './conscale';

firebase.initializeApp(config);
const db = firebase.firestore();
const collection = db.collection('scales');


const Weightness = () => {

  // 追加（お試し）
  const handleClickFetch = async () => {
    await collection
      .doc('1')
      .set({ // 手動でid名を指定
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        weight: 60,
        height: 160,
        bmi: 21,
        comment: 'お試し',
      }, { merge: true });
    const doc = await collection.doc('1').get();
    console.log(doc.data().created_at.toDate());
  }

  // 追加機能
  const [userHeight, setUserHeight] = useState(''); // 身長
  const [userWeight, setWeight] = useState(''); // 体重
  const [Comment, setComment] = useState(''); // 感想
  const handleAdd = async () => {
    if (!userHeight) {
      console.log('身長が空です');
    }
    if (!userWeight) {
      console.log('体重が空です');
    }
    // formには数字で入力していてもstring型としてみなされている→int型に変更
    const parsedWeight = parseInt(userWeight, 10);
    if (userWeight && isNaN(parsedWeight)) { // 半角にできない（＝ true）
      console.log('体重は半角でお願いします');
    }
    if (!userHeight || isNaN(parsedWeight)) {
      return;
    }
    await collection.add({
      created_at: firebase.firestore.FieldValue.serverTimestamp(), // timestamp
      height: userHeight, // cm
      weight: parsedWeight, // kg
      bmi: parsedWeight / (userHeight / 100) ** 2, // 指数
      comment: Comment, // 感想
    });
    setUserHeight(''); // フォームを空にする
    setWeight('');
    setComment('');
  }

  // 更新機能
  const [docId, setDocId] = useState(''); // id で更新・削除

  // 削除機能
  const handleDelete = async () => {
    if (!docId) {
      console.log('Idが空です');
      return;
    }
    try {
      await collection.doc(docId).delete();
      setUserHeight('');
      setWeight('');
      setComment('');
      setDocId('');
      console.log(docId, 'delete!')
    } catch (error) {
      console.error(error);
    }
  }

  // users（全データ）
  const [users, setUsers] = useState([]);

  // 自動検知
  useEffect(() => {
    const unsubscribe = collection
      .orderBy('created_at', 'asc')
      .limit(8)
      .onSnapshot((queryShot) => { // 検知
        // 自動で取得
        const _user = queryShot.docs.map(doc => {
          const dd = doc.data();
          return {
            userId: doc.id,
            weight: dd.weight,
            height: dd.height,
            bmi: dd.bmi.toFixed(2),
            comment: dd.comment,
            created_at: dd.created_at.toDate().getTime(), // UnixTime → rechartsで変換
            // ...doc.data(),
          }
        });
        setUsers(_user);
        console.log(_user);
      });
    return () => {
      unsubscribe();
    };
  }, []); // ★★[]と書いたらreturn内がunmountedされた。

  return (
    <div className="weightness">
      <h1>masahiroの体型管理</h1>
      <div>
        <label>身長：</label>
        <input type="text" placeholder="160" autoComplete="off" value={userHeight}
          onChange={e => { setUserHeight(e.target.value) }}
        /> cm<br />
        {!userHeight &&
          <p className="text-warning">※身長(cm)を入力してください</p>
        }
        <label>体重：</label>
        <input type="text" placeholder="50" autoComplete="off" value={userWeight}
          onChange={e => { setWeight(e.target.value) }}
        /> kg<br />
        {!userWeight &&
          <p className="text-warning">※体重(kg)を入力してください</p>
        }
        <label>感想：</label><br />
        <textarea placeholder="痩せた" autoComplete="off" value={Comment}
          onChange={e => { setComment(e.target.value) }}
        /><br />
        {!Comment &&
          <p className="text-warning">※感想を入力してください</p>
        }

        <div className="btn btn-light py-0 px-2" onClick={handleAdd}>記録</div>
      </div>


      <div className="mt-4">
        <Graph scale={users} />
        <div>
          <label>ID：</label>
          <input type="text" autoComplete="off" value={docId}
            onChange={e => { setDocId(e.target.value) }}
          />
          <div className="btn btn-light py-0 px-2 mr-2" onClick={handleClickFetch}>試行</div>
          <div className="btn btn-light py-0 px-2" onClick={handleDelete}>削除</div>
        </div>
        <table className="table table-striped d-inline">
          <thead>
            <tr bgcolor="Coral">
              <th>日時</th>
              <th>身長</th>
              <th>体重</th>
              <th>BMI指数</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.userId}>
                  <td>{user.created_at}</td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                  <td>
                    {user.bmi}<br />
                    {/* {user.userId} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Weightness;