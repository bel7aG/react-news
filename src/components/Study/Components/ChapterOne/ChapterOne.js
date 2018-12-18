import React from 'react'
import { Comment } from './Components'
import { Editor } from '../../../'

const ChapterOne = () => (
  <div className="chapter chapter-one">
    <div className="comments">
      {/* <Comment name="Belhassen Gharsallah" text="this post it's so Cute."/> */}
      <Editor code={(
        `
const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)
        `
      )}/>
    </div>
  </div>
)

export default ChapterOne
