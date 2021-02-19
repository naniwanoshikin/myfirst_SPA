import React, { Component } from 'react';
import { ComposedChart, Line, Bar, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class App extends Component {
  render() {
    return (
      <div className="mx-auto" style={{ width: '95%', height: '260px' }}>
        <ResponsiveContainer>
          <ComposedChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            data={this.props.scale} >
            {/* <Bar type="monotone" dataKey="height" barSize={20} fill="skyblue" unit="cm" /> */}
            <Line type="monotone" dataKey="weight" stroke="purple" unit="kg" />
            <Area type="monotone" dataKey="bmi" fill="#8884d8" stroke="blue" />
            <Area type="monotone" dataKey="comment" fill="#8884d8" stroke="pink" />
            <XAxis dataKey="created_at" stroke="blue"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()}
              type='number'
            />
            <YAxis />
            {/* 破線 */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {/* 判例 */}
            <Legend />
            {/* ホバー判例 */}
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
