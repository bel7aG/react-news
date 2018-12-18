import React from 'react'
import { Component, Editor } from '../'

const chapters = [
  {boxContent: "Chapter: 1", url: "/react-one"},
  {boxContent: "Chapter: 2", url: "/react-two"},
  {boxContent: "Chapter: 3", url: "/react-three"},
  {boxContent: "Chapter: 4", url: "/react-foor"},
  {boxContent: "Chapter: 5", url: "/react-five"},
  {boxContent: "Chapter: 6", url: "/react-six"}
]

const Study = (props) => {
  const study = (
    chapters.map(({ boxContent, url }, index) =>
      <Component
        key={boxContent}
        classNameBox={"item item--" + (index + 1)}
        classNameContent={`item--${index + 1}__content`}
        content={boxContent}
        url={url}
      />)
  )

  return (
    <div className="study">
      <div className="grid">
        <div className="grid-layout">
          {study}
        </div>
      </div>
    </div>
  )
}

export default Study
