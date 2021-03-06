import React from 'react'
import { ApprovalCard, CommentDetails } from './Components'
import { Editor } from '../../../'
import { CodeOne } from '..'


const ChapterOne = () => (
  <div className="chapter chapter-one">
    <div className="comments">
      <Editor code={CodeOne}/>
    </div>
    <div className="cards">
      <ApprovalCard>
        <CommentDetails name="Belhassen Gharsallah" text="this post it's so Cute." />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name="bel7aG" text="this post it's so Popular." />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name="lola" text="this post it's so bad." />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name="crappy" text="this post it's crappy." />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name="hmmm" text="this post it's eeeeehem." />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails name="tchu" text="this post it's tchuuuuuuu." />
      </ApprovalCard>
    </div>

  </div>
)

export default ChapterOne
