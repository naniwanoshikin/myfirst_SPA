import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import config from "./config";

// firebase使用
firebase.initializeApp(config);

export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const FirebaseTimestamp = firebase.firestore.Timestamp;

const collection = db.collection('loginUsers');

// ユーザ登録
export const signupWithEmailAndPassword = async (name, email, password) => {
  try {
    // 認証登録
    const user = await auth.createUserWithEmailAndPassword(email, password);
    // Mailに送信(emailVerified)
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
    return user;
  } catch (error) {
    console.log('登録失敗');
    console.log(error); // passは最低6桁必要。
  }
};

// ログイン
export const signinWithEmailAndPassword = async (email, password) => {
  try {
    // ログインさせる
    const user = await auth.signInWithEmailAndPassword(email, password);

    // 取得
    if (user) {
      const uid = user.user.uid
      const snapshot = await collection.doc(uid).get();
      console.log(snapshot);
      const _users = [];
      snapshot.forEach(doc => {
        _users.push({
          userId: doc.id, // userId定義
          ...doc.data(), // collectionを全て取得
        });
        console.log('Fetch!', doc.id, ':', doc.data());
      });
      console.log(_users);
    }

    console.log('ログイン成功');
    return user;
  } catch (error) {
    console.log('ログイン失敗');
    console.log(error);
  }
};

// ログアウト
export const signout = async () => {
  const user1 = await auth.currentUser;
  console.log('サインアウト前', user1);

  await auth.signOut();

  const user2 = await auth.currentUser;
  console.log('サインアウト後', user2);
};
