// トラゼミ入門（#8, 9 Hooks）
// class機能（stateやライフサイクル）をfunctional Componentでも使える
// 100%後方互換（小さく導入できる）
// 下位のComponentでもstateを管理しやすくできる
// なぜ使うか？ シンプルさを保つため
import React, { useState, useEffect } from 'react';

// わからなかったこと：警告が消えない（count, countUpの依存関係がない）


const LikeButton = () => {
  // [state変数, state変更関数] = （初期値）
  const [count, counter] = useState(0) // useState（ステートフックという）
  // 回りくどく追加。第二引数の値を変更させる → 2いいね以上できる
  const [limit, release] = useState(true)

  const countUp = () => {
    counter(count + 1) // →countUp警告あり
  }
  // useEffect：ライフサイクルメソッドの代替（優秀！）。機能ベースでかく。
  // ★第二引数の配列を入れると、値を前回レンダーと今回レンダーで比較される。
  // →変更があればcallback関数を実行。
  useEffect(() => { // callBack関数でかく（レンダー毎に呼ばれる）。毎回mount, unmoutされる。
    console.log('mount, Render');
    document.getElementById('counter').addEventListener('click', countUp) // １いいね増やす
    if (count > 10) {
      console.log('componentDidUpdate');
      counter(0);
    }
    return () => { // callback関数でかく。アンマウント時に実行。
      console.log('Unmount');
      // クリーンアップ関数：remove（リスナー解除）（無駄なイベントを減らし、サーバー負荷を減らす）
      document.getElementById('counter').removeEventListener('click', countUp)
    }
    // 閉じタグについて：callback関数の実行。
    // }); // １、レンダー毎に実行。
    // }, []); // ２、マウント時に実行（最初の１回）。１いいねしか増えない。
  }, [limit]); // ３、マウント時に実行。値が変わった時に実行。いいね増やせる。本来はcountとかくべきだが、まわりくどく説明するためにlimitと新たに設定。→countの警告消える。

  return (
    <>
      <div id="counter" className="btn btn-primary mr-2">いいね数: {count}</div>
      {/* コールバック関数を呼びたい為に第二引数のlimit値を変えるボタンを設定 */}
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
        readOnly // これ入れないとなぜかエラー出る（わからない。。。。）
      /><br />
      {/* 例２：いいねボタン */}
      <LikeButton />
    </div>
  )
}

export default App;