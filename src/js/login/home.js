import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Weight/index';
// import Graph from '../weight/wecharts';


const Home = () => {
  const { signout } = useContext(AuthContext);


  // 入力情報
  const [userHeight, setUserHeight] = useState(''), // 身長
    [userWeight, setUserWeight] = useState(''); // 体重

  // users（全データ）
  const [users, setUsers] = useState([]);


  useEffect(() => {
    // const user = signin(userEmail, userPassword, history)
    // console.log('ログイン情報', user)
  })

  return (
    <div className="my-0 py-4 bg-warning">
      <h2>MyPage</h2>
      <div className="btn btn-danger" onClick={signout} >Logout</div>


    </div>
  );
}

export default Home;
