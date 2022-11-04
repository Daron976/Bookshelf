/*eslint-disable*/
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className='nav-holder'>
      <p className="logo"><strong>Bookstore CMS</strong></p>
      <nav>
        <ul className="nav-link">
          <li className="link-item" id="books" data-testid="books"><Link to="/">Books</Link></li>
          <li className="link-item"><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
    <div className='user-details'>
      <i class="fa-solid fa-user person"></i>
    </div>
    <Outlet />
  </header>
);

export default Header;
