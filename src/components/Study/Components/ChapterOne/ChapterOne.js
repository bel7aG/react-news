import React from 'react'
import faker from 'faker'
import { ApprovalCard } from './Components'
import { Editor } from '../../../'

const ChapterOne = () => (
  <div className="chapter chapter-one">
    <div className="comments">
      <Editor code={(
`
//CommentDetails:
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


//ApprovalCard
import React from 'react'
import faker from 'faker'
import { CommentDetails } from '..'

const ApprovalCard = (props) => {
  console.log(props)
  return (
    <div className="approval-card">
      <CommentDetails image={faker.image.cats()} name={props.name} text={props.text} image={props.image} />
      <div className="btns">
        <button className="btn-approve">Approve</button>
        <button className="btn-rejected">rejected</button>
      </div>
    </div>
  )
}

export default ApprovalCard

`)}/>
    </div>
    <div className="cards">
      <ApprovalCard name="Belhassen Gharsallah" text="this post it's so Cute." />
      <ApprovalCard name="bel7aG" text="this post it's so amazing." />
      <ApprovalCard name="lola" text="this post not bad at all." />
      <ApprovalCard name="joker" text="sup Joker this post it's like you." />
    </div>

  </div>
)

export default ChapterOne
