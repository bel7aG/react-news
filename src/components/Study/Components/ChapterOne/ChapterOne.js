import React from 'react'
import { Comment } from './Components'
import { Editor } from '../../../'

const ChapterOne = () => (
  <div className="chapter chapter-one">
    <div className="comments">
      <Editor code={(
`
<div className="comment">
<a href="/" className="avatar">
  <img src={faker.image.image()} style={{height: "6rem", width: "6rem"}} alt="avatar"/>
</a>
<div className="content">
  {name}
</div>
<div className="metadata">
  <span className="date">{toDay}</span>
</div>
<div className="text">{text}</div>
</div>`)}/>
    </div>

    <Comment name="Belhassen Gharsallah" text="this post it's so Cute."/>

  </div>
)

export default ChapterOne
