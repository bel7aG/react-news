import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomeSVG from '../../assets/icons/house.svg'

export default class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <nav className="nav-box">
          <ul className="list-items">
            <li className="list-item">
              <NavLink to="/">
                <img src={HomeSVG} alt="" class="home-svg"/>

              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/study">
                Study
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
