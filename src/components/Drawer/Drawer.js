import React, { Component } from 'react'

export default class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <nav className="nav-box">
          <ul className="list-items">
            <li className="list-item">Home</li>
            <li className="list-item">Chapters</li>
            <li className="list-item">contact me</li>
          </ul>
        </nav>
      </div>
    )
  }
}
