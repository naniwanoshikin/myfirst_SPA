import React, { useState } from 'react';
import { signupWithEmailAndPassword, } from '../weight/index';
import { Link, } from 'react-router-dom';

// 登録フォーム
const SignUpView = () => {

  // 登録情報
  const [userName, setName] = useState(''),
    [userEmail, setEmail] = useState(''),
    [userPassword, setPassword] = useState('');

  /**
   * ユーザ登録
   * @param {Event} event
   */
  const signUp = async (e) => {
    e.preventDefault()
    if (userEmail === "" || userPassword === "") {
      return false
    }
    const user = await signupWithEmailAndPassword(userName, userEmail, userPassword)
    console.log('登録情報', user)
  }

  return (
    <div className="login my-0 py-4 bg-warning">
      <h2>Sign up</h2>
      <form onSubmit={signUp}>
        <label>Name
          <input type="text" name="" placeholder="Taro"
            autoComplete="off"
            value={userName}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>Email
          <input type="email" name="" placeholder="aaa@fff.com"
            autoComplete="off"
            value={userEmail}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>Pass
          <input type="password" name="" placeholder="pass"
            autoComplete="off"
            value={userPassword}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" className="btn btn-primary" value="登録" />
      </form>
      <Link to="./signin">ログイン</Link>へ
    </div>
  )
}

export default SignUpView;