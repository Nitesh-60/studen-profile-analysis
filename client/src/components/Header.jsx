import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 border-b border-t border-blue-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white ml-8"><Link to='/'>StudentFile</Link></h1>
        <nav className='mr-10'>
          <span className="text-white hover:text-gray-200 ml-4"><Link to='/Login'>Login</Link></span>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg ml-4 hover:bg-blue-200">
            <Link to='/Login'>Sign Up</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
