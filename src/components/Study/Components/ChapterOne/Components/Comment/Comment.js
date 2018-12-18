import React from 'react'
import faker from 'faker'

const toDay = new Date().toLocaleDateString()

const Comment = ({ name, text }) => (
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
  </div>
)

export default Comment
