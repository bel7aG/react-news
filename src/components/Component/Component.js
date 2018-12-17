import React from 'react'
import { Link } from 'react-router-dom'


const Component = ({ classNameBox, classNameContent, content, url }) => {

  return (
    <div className={classNameBox}>
      <div className={`${classNameContent}`}>
        <Link to={`/study${url}`}>{content}</Link>
      </div>
    </div>
  )
}


export default Component
