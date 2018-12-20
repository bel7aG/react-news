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
