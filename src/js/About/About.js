import React from 'react';
import { requestStates } from './constants';
import { useSkills } from './customHooks/useSkills';
import Circle from 'react-circle';
import MyFalling from './animeFall_1'; // 落ちていく物体

const About = () => {
  // カスタムフックス
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

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
              <td>Picture</td>
            </tr>
          </tbody>
        </table>
        <ul className="pl-5">
          <li>2020/6 プログラミング開始</li>
          <li>2020/8 ポートフォリオ作成開始</li>
          <li>2020/12 本サイト作成開始</li>
        </ul>
        <div className="skills-container d-flex flex-wrap justify-content-around">
          {
            fetchRequestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="skill-item" key={index}>
                  <p className="description"><strong>{item.language}</strong></p>
                  <Circle
                    animate // アニメーションが走る
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className="description">エラーが発生しました</p>
            )
          }
        </div>
      </div>
      <MyFalling />
    </div>
  )
}

export default About;
