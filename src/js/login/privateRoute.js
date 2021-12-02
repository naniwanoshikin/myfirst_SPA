import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../Weight/index";
import Login from "./Login";

// 認証でアクセス
const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  // userコンポーネント
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : Login;

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;