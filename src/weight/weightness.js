import React, { useState, useEffect } from 'react';
import { db, FirebaseTimestamp } from './index';
import Graph from './wecharts';

const collection = db.collection('scales');


const Weightness = () => {

  // 追加機能（お試し用）
  // const handleClickFetch = async () => {
  //   await collection
  //     .doc('2')
  //     .set({ // 手動でid名を指定
  //       created_at: FirebaseTimestamp.now(), // Timestamp型：こちらがいいかも。
  //       // created_at: firebase.firestore.FieldValue.serverTimestamp(), // Map型：→エラー出る
  //       weight: 60,
  //       height: 160,
  //       bmi: 21,
  //       comment: 'お試し',
  //     }, { merge: true });
  //   // const doc = await collection.doc('1').get();
  //   // console.log(doc.data().created_at.toDate());
  // }

  // 入力情報
  const [userHeight, setUserHeight] = useState(''); // 身長
  const [userWeight, setUserWeight] = useState(''); // 体重
  const [userComment, setUserComment] = useState(''); // 感想
  // エラー情報
  const [heightError, setErrorHeight] = useState(false); // 身長
  const [weightError, setErrorWeight] = useState(false); // 体重
  const [commentError, setErrorComment] = useState(false); // 感想
  // 追加機能
  const handleAdd = async () => {
    if (!userHeight) {
      setErrorHeight({ heightError: true });
    }
    if (!userWeight) {
      setErrorWeight({ weightError: true });
    }
    if (!userComment) {
      setErrorComment({ commentError: true });
    }
    const parsedWeight = parseInt(userWeight, 10);
    if (userWeight && isNaN(parsedWeight)) {
      console.log('体重は半角でお願いします');
    }
    if (!userHeight || isNaN(parsedWeight)) {
      return;
    }
    await collection.add({
      created_at: FirebaseTimestamp.now(), // Timestamp型
      height: userHeight, // cm
      weight: parsedWeight, // kg
      bmi: parsedWeight / (userHeight / 100) ** 2, // 指数
      comment: userComment, // 感想
    });
    setUserHeight('');
    setUserWeight('');
    setUserComment('');
  }


  // 削除機能
  const [docId, setDocId] = useState(''); // id で更新・削除
  const handleDelete = async () => {
    if (!docId) {
      console.log('Idが空です');
      return;
    }
    try {
      await collection.doc(docId).delete();
      setUserHeight('');
      setUserWeight('');
      setUserComment('');
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
      // .limit(8)
      .onSnapshot((queryShot) => {
        // 自動で取得
        const _user = queryShot.docs.map(doc => {
          const dd = doc.data();
          return {
            userId: doc.id,
            weight: dd.weight,
            height: dd.height,
            bmi: dd.bmi.toFixed(1),
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
    <div className="weightness pt-4">
      <h1>体型メモ</h1>
      <div>
        <label>身長：</label>
        <input type="text" placeholder="160.1" autoComplete="off" value={userHeight}
          onChange={e => { setUserHeight(e.target.value) }}
        /> cm<br />
        <label>体重：</label>
        <input type="text" placeholder="48.3" autoComplete="off" value={userWeight}
          onChange={e => { setUserWeight(e.target.value) }}
        /> kg<br />
        <label>感想：</label>
        <textarea placeholder="痩せた" autoComplete="off" value={userComment} cols="25" rows="1"
          onChange={e => { setUserComment(e.target.value) }}
        /><br />
        {heightError &&
          <p className="text-warning">※身長を入力してください</p>
        }
        {weightError &&
          <p className="text-warning">※体重を入力してください</p>
        }
        {commentError &&
          <p className="text-warning">※感想を入力してください</p>
        }
        <div className="btn btn-warning py-0 px-2" onClick={handleAdd}>記録</div>
      </div>


      <div className="mt-4">
        <Graph scale={users} />
        <table className="table table-striped d-inline">
          <thead>
            <tr bgcolor="Coral">
              <th>日時</th>
              <th>身長cm</th>
              <th>体重kg</th>
              <th>BMI</th>
              <th>感想</th>
            </tr>
          </thead>
          <tbody bgcolor="sandybrown">
            {users.map((user) => {
              return (
                <tr key={user.userId}>
                  <td>'{new Date(user.created_at).toLocaleDateString().slice(2)}</td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                  <td>{user.bmi}</td>
                  <td>{user.comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <label>ID：</label>
          <input type="text" autoComplete="off" value={docId}
            onChange={e => { setDocId(e.target.value) }}
          />
          {/* <div className="btn btn-light py-0 px-2 mr-2" onClick={handleClickFetch}>試行</div> */}
          <div className="btn btn-light py-0 px-2" onClick={handleDelete}>削除</div>
        </div>
      </div>
    </div>
  );
}

export default Weightness;