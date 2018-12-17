import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeSVG, StudySVG, ContactSVG } from '../../assets/icons'

export default class Drawer extends Component {


  render() {
    return (
      <div className="drawer">
        <nav className="nav-box">
          <ul className="list-items">
            <li className="list-item">
              <NavLink to="/">
                <img src={HomeSVG} alt="" className="home-svg"/>
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/study">
                <img src={StudySVG} alt="" className="study-svg"/>
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/contact">
                <img src={ContactSVG} alt="" className="contact-svg"/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
