import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import config from "./config";
import React, { useEffect, useState } from 'react';

firebase.initializeApp(config); // firebase使用

export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
export const collection = db.collection('loginUsers');
export const AuthContext = React.createContext(); // 子コンポーネント

// 認証
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザ登録
  const signup = async (name, email, password, history) => {
    try {
      // Auth登録
      const user = await auth.createUserWithEmailAndPassword(email, password);
      // Mail送信
      // await auth.currentUser.sendEmailVerification();

      // firestore登録
      if (user) {
        const uid = user.user.uid
        const timestamp = FirebaseTimestamp.now()
        const userInitialData = {
          uid: uid,
          username: name,
          useremail: email,
          created_at: timestamp,
          updated_at: timestamp,
        }
        collection.doc(uid).set(userInitialData, { merge: true });
      }
      console.log('登録成功');
      history.push("./home")
      return user;
    } catch (error) {
      console.log('登録失敗');
      console.log(error); // passは最低6桁
    }
  };

  // ログイン
  const signin = async (email, password, history) => {
    try {
      // ログインさせる
      const user = await auth.signInWithEmailAndPassword(email, password);

      // 取得
      if (user) {
        const uid = user.user.uid
        const snapshot = await collection.doc(uid).get();
        console.log('snapshot');
        console.log(uid);
        console.log(snapshot);
        const _users = [];
        // snapshot.forEach(doc => {
        //   _users.push({
        //     userId: doc.id, // userId定義
        //     ...doc.data(), // collectionを全て取得
        //   });
        //   console.log('Fetch!', doc.id, ':', doc.data());
        // });
        console.log(_users);
      }

      console.log('ログイン成功');
      history.push("/home");
      return user;
    } catch (error) {
      console.log('ログイン失敗');
      console.log(error);
    }
  };


  // ログアウト
  const signout = async () => {
    const user1 = await auth.currentUser;
    console.log('サインアウト前', user1);

    await auth.signOut();

    const user2 = await auth.currentUser;
    console.log('サインアウト後', user2);
  };

  // ユーザ認証
  useEffect(() => {
    const cleanup = auth.onAuthStateChanged(setCurrentUser);
    return () => {
      cleanup()
      console.log('アンマウントされました');
    }
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        signin: signin,
        signup: signup,
        signout: signout,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}
