import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <nav className="nav-box">
          <ul className="list-items">
            <li className="list-item"><NavLink to="/">Home</NavLink></li>
            <li className="list-item"><NavLink to="/chapters">Chapters</NavLink></li>
            <li className="list-item"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}
