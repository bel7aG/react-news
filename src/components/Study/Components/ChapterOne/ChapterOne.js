import React from 'react'
import { Comment } from './Components'
import { Editor } from '../../../'

const ChapterOne = () => (
  <div className="chapter chapter-one">
    <div className="comments">
      <Comment name="Belhassen Gharsallah" text="this post it's so Cute."/>
      <Editor code={`<div><h1>belhassen</h1></div><div></div>`}/>
    </div>
  </div>
)

export default ChapterOne
