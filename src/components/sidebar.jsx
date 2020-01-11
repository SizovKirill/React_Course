import React from 'react';

const Sidebar = () => {
    return(
<nav className="nav__header">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__item-link" href="#">Profile</a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link" href="#">Message</a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link" href="#">News</a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link" href="#">Music</a>
          </li>
          <li className="nav__item">
            <a className="nav__item-link settings" href="#">Settings</a>
          </li>
        </ul>
      </nav>
    );
}

export default Sidebar; 