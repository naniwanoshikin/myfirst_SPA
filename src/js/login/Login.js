import React, { useState, useContext} from 'react';
import { AuthContext } from '../Weight/index';
import { Link, } from 'react-router-dom';
import Hooks from './hooks';

// ログインフォーム
const useSign = ({ history }) => {
  const { signin } = useContext(AuthContext);


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
    const user = await signin(userEmail, userPassword, history)
    console.log('ログイン情報', user)
  }


  return (
    <div className="login my-0 py-4 bg-warning">
      <h2>Login</h2>
      <form onSubmit={signIn} className="mb-3">
        <label>Email
          <input type="email" name="" placeholder="aaa@fff.com"
            autoComplete="off"
            value={userEmail}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>Pass
          <input type="password" name="" placeholder="aaaaaa"
            autoComplete="off"
            value={userPassword}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" className="btn btn-primary mt-5" value="ログイン" />
      </form>
      <Link to="./signup">新規登録はこちら</Link>
      <br />
      {/* <Link to="./home">Home</Link> */}
      <Hooks color="green" />
    </div>
  )
}

export default useSign;