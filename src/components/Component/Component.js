import React from 'react'
import { Link } from 'react-router-dom'


const Component = ({ className, content, url }) => {

  return (
    <div className={className}>
      <div className="component-content">
        <Link to={`/study${url}`}>{content}</Link>
      </div>
    </div>
  )
}


export default Component
