import React from 'react';
import { Link, } from 'react-router-dom';
import 'firebase/app';
// import firebase from '../weight/config';




const signIn = () => {
  return (
    <div className="logedIn my-0 py-4 bg-warning">
      <p>作成中</p>
      <p>新規登録</p>
      <Link to="">Homeへ</Link>
      <div className="btn btn-primary">Logout</div>
    </div>
  );
}


export default signIn;