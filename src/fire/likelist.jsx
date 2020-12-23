import React, { useState, useEffect } from 'react';

const LikeButton = () => {
  const [count, counter] = useState(0)
  // 2いいね以上するため
  const [limit, release] = useState(true)
  const countUp = () => {
    counter(count + 1)
  }
  // ライフサイクルメソッド
  useEffect(() => {
    // console.log('render');
    // マウント時
    document.getElementById('counter').addEventListener('click', countUp)
    // componentDidUpdate
    if (count > 10) {
      counter(0);
    }
    return () => {
      // アンマウント時（クリーンアップ関数）
      console.log('Unmounting');
      document.getElementById('counter').removeEventListener('click', countUp)
    }
  }, [limit]); // limit値が変わる度にコールバック関数が呼ばれる

  return (
    <>
      <button id="counter">いいね数: {count}</button>
      <button onClick={() => release(!limit)}>+いいね</button>
    </>
  )
}

export const Likelist = () => {
  const [isPublished, togglePublished] = useState(false)
  return (
    <div>
      <label htmlFor="check">公開：</label>
      <input type="checkbox" id="check"
        checked={isPublished}
        onClick={() => togglePublished(!isPublished)}
        readOnly
      />
      <LikeButton />
    </div>
  )
}
