import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  return (
    <header className="bg-gray-50 py-4 border-b border-t border-black-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black ml-8"><Link to='/'>StudentFile</Link></h1>
        <nav className='mr-10'>
          <span className="text-black hover:text-gray-400 border-spacing-1"><Link to='/Login'>Create Account</Link></span>
        </nav>
      </div>
    </header>
  );
};

export default Header;