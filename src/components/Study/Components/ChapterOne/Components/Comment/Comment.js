import React from 'react'

const toDay = new Date().toLocaleDateString()

const Comment = ({ name, text }) => (
  <div className="chapter comments">
    <a href="/" className="avatar">
      <img src="" alt="avatar"/>
    </a>
    <div className="content">
      {name}
    </div>
    <div className="metadata">
      <span className="date">{toDay}</span>
    </div>
    <div className="text">{text}</div>
  </div>
)

export default Comment
