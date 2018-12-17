import React from 'react'


const Component = ({ className, content }) => {

  return (
    <div className={className}>
      <div className="component-content">{content}</div>
    </div>
  )
}


export default Component
