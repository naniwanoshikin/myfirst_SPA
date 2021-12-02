import React, { useState, useContext } from 'react';
import { AuthContext } from '../Weight/index';
import { Link, } from 'react-router-dom';

// 登録フォーム
const SignUpView = (history) => {
  const { signup } = useContext(AuthContext);

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
    const user = await signup(userName, userEmail, userPassword, history)
    console.log('登録情報', user)
  }

  return (
    <div className="login my-0 py-4 bg-warning">
      <h2>Signup</h2>
      <form onSubmit={signUp} className="mb-3">
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
        <input type="submit" className="btn btn-primary mt-3" value="登録" />
      </form>
      <Link to="./signin">ログイン</Link>へ
    </div>
  )
}

export default SignUpView;