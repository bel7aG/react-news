import React from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'

const toDay = new Date().toLocaleDateString()

const Comment = ({ name, text }) => (
  <div className="comment chapter-result">
    <Link to="/study" className="avatar">
      <img src={faker.image.image()} style={{height: "6rem", width: "6rem"}} alt="avatar"/>
    </Link>
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
