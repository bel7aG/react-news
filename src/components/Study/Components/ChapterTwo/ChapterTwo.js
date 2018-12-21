import React from 'react'
import App, { SeasonDisplay } from './components'
import { Editor } from '../../../'
const ChapterTwo = () => (
  <div className="chapter chapter-two">
    <Editor />  
    <App />
    <SeasonDisplay />
  </div>
)

export default ChapterTwo
