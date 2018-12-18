import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const Editor = ({ code }) => (
  <div>
    <LiveProvider code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
)

export default Editor
