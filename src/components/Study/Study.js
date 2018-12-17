import React from 'react'
import { Component } from '..'

const Study = () => (
  <div className="study">
    <div className="grid">
      <div className="grid-layout">
        <Component
          className="component--1"
          content="Javascript"
        />
        <Component
          className="component--2"
          content="React"
        />
        <Component
          className="component--3"
          content="SASS"
        />
        <Component
          className="component--4"
          content="NodeJS"
        />
        <Component
          className="component--5"
          content="GraphQL"
        />
        <Component
          className="component--6"
          content="Python"
        />
      </div>
    </div>
  </div>
)

export default Study
