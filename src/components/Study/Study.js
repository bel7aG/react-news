import React from 'react'
import { Component } from '..'

const study = [
  {boxContent: "Javascript", url: "/javascript"},
  {boxContent: "React", url: "/react"},
  {boxContent: "Sass", url: "/sass"},
  {boxContent: "NodeJS", url: "/NodeJS"},
  {boxContent: "GraphQL", url: "/graphQL"},
  {boxContent: "Python", url: "/python"}
]

const Study = () => {
  const chapters = study.map(({ boxContent, url }, index) =>
    <Component key={boxContent} className={"item item--" + (index + 1)} content={boxContent} url={url} />)

  return (
    <div className="study">
      <div className="grid">
        <div className="grid-layout">
          {chapters}
        </div>
      </div>
    </div>
  )
}



export default Study
