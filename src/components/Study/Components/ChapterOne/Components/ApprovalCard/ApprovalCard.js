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
