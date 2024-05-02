import React from 'react';
import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <>
      <div className='flex'>
        <div className='flex flex-col w-[50%] px-12 pt-24'>
          <h1 className='font-extrabold text-6xl text-gray-800 ml-24 mb-4'>Organize Your Academic</h1>
          <p className='text-lg text-gray-600 ml-24 mb-6'>Build your professional profile with ease</p>
          <div className="w-40 bg-blue-500 p-2 rounded-lg shadow-md ml-24">
            <Link to='/Login' className='text-white font-bold'>Create Account</Link>
          </div>
        </div>

        <div className='relative flex px-12 flex-row items-center space-y-reverse'>
          <div className='absolute inset-5 bg-gray-400 w-96 h-72 opacity-50 mt-16 ml-32 rounded-lg'></div>
          <div className='absolute inset-0 bg-gray-200 w-96 h-72 mt-16 ml-32 rounded-lg'></div>
        </div>
      </div>
      
      <div className='mt-28 w-full h-48 bg-gray-300 p-4 flex flex-col items-center justify-center'>
        <p className='text-2xl text-gray-800 text-center mb-2'>Build a standout profile to attract opportunities</p>
        <p className='text-lg text-gray-600 text-center'>Nitesh Pandey, Engineering Student</p>
      </div>
    </>
  );
};

export default HomeBody;
