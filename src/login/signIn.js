import React, { useState } from 'react';
import { signinWithEmailAndPassword } from '../weight/index';
import { Link, } from 'react-router-dom';


// ログインフォーム
const useSign = () => {

  // 入力情報
  const [userEmail, setEmail] = useState(''),
    [userPassword, setPassword] = useState('');

  /**
   * ログイン
   * @param {Event} event
   */
  const signIn = async (e) => {
    e.preventDefault()
    if (userEmail === "" || userPassword === "") {
      return false
    }
    const user = await signinWithEmailAndPassword(userEmail, userPassword)
    console.log('ログイン情報', user)
  }


  return (
    <div className="login my-0 py-4 bg-warning">
      <h3>ログイン</h3>
      <form onSubmit={signIn} className="mb-3">
        <label>Email
          <input type="email" name="" placeholder="@gmail.com"
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <Link to="./signup">新規登録はこちら</Link>
      <br />
      <Link to="./home">Home</Link>
    </div>
  )
}

export default useSign;