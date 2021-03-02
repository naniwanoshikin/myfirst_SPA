import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import signIn from './signIn';
import signUp from './signUp';
import home from './home';


// Routing
const App = () => (
  <BrowserRouter>
    <div>
      {/* ログイン */}
      <Route exact path="/signin" component={signIn} />
      {/* 新規登録 */}
      <Route path="/signup" component={signUp} />
      <Route path="/home" component={home} />
    </div>
  </BrowserRouter>
)

export default App;