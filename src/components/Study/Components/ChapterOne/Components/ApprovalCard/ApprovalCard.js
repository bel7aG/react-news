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
