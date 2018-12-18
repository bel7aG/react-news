import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const Editor = ({ code }) => (
  <div className="editor">
    <div className="editor-provider-box">
      <LiveProvider className="editor-provider" code={code}>
        <LiveEditor className="live-editor"/>
        <div className="who">
          <LiveError className="editor-error" />
          <LivePreview className="preview"/>
        </div>
      </LiveProvider>
    </div>
  </div>
)

export default Editor
