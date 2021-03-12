import React, { useState, useEffect, useContext, useReducer } from 'react';

//コンポーネントの外で Context オブジェクトを作成
const ColorContext = React.createContext();

const Hooks = (props) => {
  //Provider コンポーネントで適用範囲を囲み value プロパティに渡したい値を設定
  return (
    <div>
      <h1>Root Component</h1>
      <ColorContext.Provider value={props.color}>
        <ComponentA />
      </ColorContext.Provider>
    </div>
  )
}

const ComponentA = (props) => {
  //props の受け渡しはない
  return (
    <div>
      <h3>Componet A</h3>
      <ComponentB />
    </div>
  )
}

const ComponentB = (props) => {
  //props の受け渡しはない
  return (
    <div>
      <h4>Componet B</h4>
      <ComponentC />
    </div>
  )
}

const ComponentC = (props) => {
  //Consumer コンポーネントで値を受け取る
  const value = useContext(ColorContext);
  return (
    <div>
      <h5>Componet C | color : {value}</h5>
    </div>
  )
}

export default Hooks;