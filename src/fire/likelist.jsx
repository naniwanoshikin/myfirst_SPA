import React, { useState } from 'react';
import LikeButton from './like';

const Likelist = (props) => {
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

export default Likelist;