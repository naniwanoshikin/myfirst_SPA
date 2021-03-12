// 前田剛Youtube firebaseとの連携
import React, { useState, useEffect } from 'react';
import { db } from '../src/weight/config';

const collection = db.collection('users');


const App = () => {

  // 取得機能
  const [users, setUsers] = useState([]); // usersデータに格納
  const handleClickFetch = async () => {

    // 非同期処理（→async awaitすれば次の処理を待ってくれる）
    // const doc = await collection.doc('lhZF7Dgo4zuxUYmuHirQ').get(); // document 取得
    // console.log(doc.id, ':', doc.data()); // ドキュメントid
    const snapshot = await collection
      .where('age', '>=', 10) // 条件
      .limit(3) // 先頭から件数
      .get();
    const _users = []; // ここに情報を入れる
    snapshot.forEach(doc => {
      _users.push({
        userId: doc.id, // userId定義
        ...doc.data(), // collectionを全て取得（スプレッド演算子）
      });
      console.log('Fetch!', doc.id, ':', doc.data());
    });
    setUsers(_users);
  };


  // 追加機能
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const handleAdd = async () => {
    // 手動でid名を指定
    // await collection
    //   .doc('1')
    //   .set({
    //     name: 'Dummy',
    //     age: 99
    //   }, { merge: true }); // 情報更新したものだけ上書き

    // 自動的にid名を指定
    // collection.add({
    //     name: '田中',
    //     age: 100
    //   }).then(ref => { // then がある = promise = async awaitが使える
    //     console.log('Add with ID: ', ref.id);
    //   });

    // 変数
    if (!userName) {
      console.log('名前が空です');
    }
    if (!age) {
      console.log('年齢が空です');
    }
    // formには数字で入力していてもstring型としてみなされている→int型に変更
    const parsedAge = parseInt(age, 10);
    if (age && isNaN(parsedAge)) { // 半角にできない（＝ true）
      console.log('年齢は半角でお願いします');
    }
    if (!userName || isNaN(parsedAge)) {
      return;
    }
    await collection.add({
      name: userName,
      age: parsedAge,
    });
    // const snapShot = await ref.get();
    // console.log(ref.id, snapShot.data());
    setUserName(''); // フォームを空にする
    setAge('');
  }


  // 更新機能
  const [docId, setDocId] = useState(''); // id で更新・削除
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
      setDocId('');
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
      setDocId('');
      console.log(docId, 'delete!')
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const unsubscribe = collection
      .orderBy('age', 'desc')
      .limit(4)
      .onSnapshot((queryShot) => { // 検知
        // デバック
        // queryShot.forEach(doc => {
        //   console.log("mounted, ID:", doc.id, doc.data());
        // });

        // 自動で取得
        const _user = queryShot.docs.map(doc => {
          return {
            userId: doc.id,
            ...doc.data()
          }
        });
        setUsers(_user);
      });

    return () => {
      unsubscribe();
    };
  }, []); // ★★[]と書いたら上記取得内容がunmountedされた。

  return (
    <div className="mx-auto py-4">
      <div>
        <div className="d-block mx-5">
          <label>名前：</label>
          <input type="text" autoComplete="off" value={userName}
            onChange={e => { setUserName(e.target.value) }}
          /><br />
          <label>年齢：</label>
          <input type="text" autoComplete="off" value={age}
            onChange={e => { setAge(e.target.value) }}
          /><br />
          <button onClick={handleClickFetch}>取得</button>
          <button onClick={handleAdd}>追加</button>
        </div>

        <div className="d-block mt-3">
          <label>ID：</label>
          <input type="text" autoComplete="off" value={docId}
            onChange={e => { setDocId(e.target.value) }}
          /><br />
          <button onClick={handleUpdate}>更新</button>
          <button onClick={handleDelete}>削除</button>
        </div>
      </div>

      <div className="mt-4">
        <p>名簿リスト</p>
        <table className="table table-striped d-inline">
          <thead>
            <tr bgcolor="Coral">
              <th>名前</th>
              <th>(age)</th>
              <th>From</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.userId}>
                  <td>
                    {user.userId}
                    {user.name}
                  </td>
                  <td>({user.age})</td>
                  <td>
                    {user.locate}
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

export default App;