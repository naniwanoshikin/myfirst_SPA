import React from 'react';
import MyFalling from './animeFall_1'; // 落ちていく物体

const About = () => {
  return (
    <div className="about">
      <div className="container py-4">
        <table className="table table-sm table-hover w-75 w-sm-50 m-5 mx-auto">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Masahiro</td>
            </tr>
            <tr>
              <td>From</td>
              <td>Osaka</td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>Picture<br />Running</td>
            </tr>
          </tbody>
        </table>
        <ul className="pl-5">
          <li>2020/6 プログラミング開始</li>
          <li>2020/8 ポートフォリオ作成開始</li>
          <li>2020/12 本サイト作成開始</li>
        </ul>
      </div>
      <MyFalling />
    </div>
  )
}

export default About;