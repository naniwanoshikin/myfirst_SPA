// 未使用：トラゼミ入門（#8, 9 Hooks）

// わからなかったこと：警告が消えない（count, countUpの依存変数がない）
// 関数名がtheLogin, userLoginだとエラー出るのが謎。App, Login, useLoginだと消えた。
import React, { useState, useEffect } from 'react';

const LikeButton = () => {
  const [count, counter] = useState(0)
  // 第二引数の値を変更させる → 2いいね以上できる
  const [limit, release] = useState(true)

  const countUp = () => {
    counter(count + 1) // →countUp警告あり
  }
  useEffect(() => {
    console.log('mount, Render'); // 毎回mountされる。
    document.getElementById('counter').addEventListener('click', countUp) // １いいね増やす
    if (count > 10) {
      console.log('componentDidUpdate');
      counter(0);
    }
    return () => { // クリーンアップ関数
      console.log('Unmount'); // アンマウント時に実行
      document.getElementById('counter').removeEventListener('click', countUp)
    }
    // }); // 1: レンダー毎に実行。
    // }, []); // 2: マウント時に実行。最初の１回 = １いいねしか増えない。
  }, [limit]); // 3: 値が変わった時に実行。いいね増える。本来はcountとかくべきだが、くどく説明するためにlimitと新たに設定。countの警告消える。

  return (
    <>
      <div id="counter" className="btn btn-primary mr-2">いいね数: {count}</div>
      {/* コールバック関数を呼びたい為に第二引数のlimit値を変えるボタンを設定（回りくどい） */}
      <div className="btn btn-danger" onClick={() => release(!limit)}>+いいね</div>
    </>
  )
}


const App = () => {
  const [isPublished, togglePublished] = useState(false)
  return (
    <div style={{ userSelect: "none" }}>
      {/* 例１：ただのcheckbox */}
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={isPublished} id="check"
        onClick={() => togglePublished(!isPublished)} // 無限ループを防ぐため関数型()で渡すこと。
        readOnly // これ入れないとエラー出る（なぜかわからん。。）
      /><br />
      {/* 例２：いいねボタン */}
      <LikeButton />
    </div>
  )
}

export default App;