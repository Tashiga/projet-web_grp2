import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = ({ children }) => {
  return (
    <div className="flex text-white">
      <nav className="ggsans fixed top-0 left-0 h-screen w-16 flex flex-col bg-[#1e1f22] text-white shadow">
        <Link to="/" className="group mt-4">
          <span className="sidebar-tooltip group-hover:scale-100">Liste d'utilisateurs</span>
          <i className="material-icons sidebar-icon">home</i>
        </Link>
      </nav>
      <div className="ml-16 mx-auto ggsans bg-[#313338] min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};

export default Header;
