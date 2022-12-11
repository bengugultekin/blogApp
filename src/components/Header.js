import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <label class="navbar-brand">Blog App</label>
        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active nav-link"> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" activeClassName="active nav-link"> Blogs </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create" activeClassName="active nav-link">Create</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        
        <h1>Blog App</h1>
      </div>
    </header>
  )
}

export default Header
