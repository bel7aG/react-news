const CodeOne = `
// Chapter 1 Component:
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



//ApprovalCard Component

import React from 'react'

const ApprovalCard = ({ children }) => {
  return (
    <div className="approval-card">
      {children}
      <div className="btns">
        <button className="btn-approve">Approve</button>
        <button className="btn-rejected">rejected</button>
      </div>
    </div>
  )
}

export default ApprovalCard


// CommentDatails Component*

import React from 'react'
import { Link } from 'react-router-dom'

const toDay = new Date().toLocaleDateString()

const CommentDetails = ({ name, text, image }) => (
    <div className="comment">
      <Link to="/study" className="avatar">
        <img src={image} alt="avatar"/>
      </Link>
      <div className="content">
        <div className="name">
          {name}
        </div>
        <div className="metadata">
          <span className="date">{toDay}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
)

export default CommentDetails
`;
export default CodeOne
