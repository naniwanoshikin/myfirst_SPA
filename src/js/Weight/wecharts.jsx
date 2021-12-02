import React, { Component } from 'react';
import { ComposedChart, Line, Bar, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class App extends Component {
  render() {
    return (
      <div className="mx-auto" style={{ width: '95%', height: '260px' }}>
        <ResponsiveContainer>
          <ComposedChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            data={this.props.scale} >
            <Bar type="monotone" name="身長" dataKey="height" barSize={20} fill="skyblue" unit="cm" />
            <Line type="monotone" name="体重" dataKey="weight" stroke="purple" unit="kg" />
            <Area type="monotone" name="BMI" dataKey="bmi" fill="#8884d8" stroke="blue" />
            <Area type="monotone" name="感想" dataKey="comment" fill="#8884d8" stroke="pink" />
            <XAxis dataKey="created_at" stroke="white"
              domain={['dataMin', 'dataMax']} // min max
              type='number' // 正しい時系列に
              tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString().slice(5)} // Y/M/D変換
            />
            <YAxis stroke="#ccc"/>
            {/* 破線 */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {/* 判例 */}
            <Legend verticalAlign="top" height={36} />
            {/* ホバー判例 */}
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }}
              labelFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
