import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Bookstore CMS</Link>
      </div>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <div className="user">
        <ImUser />
      </div>
    </nav>
  );
};

export default Navbar;
