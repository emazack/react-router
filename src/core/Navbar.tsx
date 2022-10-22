import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {


    // NavLink provides a lot of cool features. An interesting one is the activeClassNameproperty.
    //  This attribute apply the specified CSS class only when the browser url matches the url 
    //  added in the "to " NavLink attribute
    // className can either be a string or a function that returns a string. 
    // If the function className is used, the link’s active state is passed as a parameter. 
    // This is helpful if you want to exclusively apply a className to an inactive link.

  function setActive(params: { isActive: boolean }) {
    return params.isActive ? 'nav-link text-danger' : 'nav-link '
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/admin">Admin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/settings">Settings</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/contacts">Contacts</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
};