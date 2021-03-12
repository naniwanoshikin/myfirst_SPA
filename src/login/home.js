import React from 'react';
import { Link, } from 'react-router-dom';
import { signout } from '../weight/index';


const Home = () => {
  return (
    <div className="my-0 py-4 bg-warning">
      <h2>Home Page</h2>
      <br />
      <div className="btn btn-danger" onClick={signout} >Logout</div>
      <br />
      <Link to="./signup">新規登録</Link>
      <br />
      <Link to="./signin">ログイン</Link>
    </div>
  );
}

export default Home;