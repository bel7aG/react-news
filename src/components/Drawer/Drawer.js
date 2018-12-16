import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <nav className="nav-box">
          <ul className="list-items">
            <li className="list-item">
              <NavLink to="/">
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/chapters">
                <span>C</span>
                <span>h</span>
                <span>a</span>
                <span>p</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
