import React, { Component } from 'react';
import { ComposedChart, Line, Bar, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '260px' }}>
        {/* レスポンシブ: 親に高さ・幅を指定 */}
        <ResponsiveContainer>
          <ComposedChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            data={this.props.skill} >
            <Line type="monotone" dataKey="Html" stroke="green" />
            <Line type="monotone" dataKey="Sass" stroke="orange" />
            <Line type="monotone" dataKey="JS" stroke="skyblue" />
            <Line type="monotone" dataKey="jQuery" stroke="purple" />
            <Bar type="monotone" dataKey="React" barSize={20} fill="skyblue" />
            <Bar type="monotone" dataKey="Laravel" barSize={20} fill="brown" />
            <Line type="monotone" dataKey="Bootstrap" stroke="red" />
            <Line type="monotone" dataKey="recharts" stroke="red" />
            <Area type="monotone" dataKey="firebase" fill="#8884d8" stroke="blue" />
            <Area type="monotone" dataKey="firestore" fill="#8884d8" stroke="blue" />
            <Area type="monotone" dataKey="Heroku" fill="#8884d8" stroke="blue" />
            <Area type="monotone" dataKey="ajax" fill="#8884d8" stroke="blue" />
            <Line type="monotone" dataKey="rails" stroke="pink" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            {/* 破線 */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {/* ホバー判例 */}
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
