import React from 'react'
import { Link } from 'react-router-dom'

const HomeBody = () => {
  return (
    <>
    <div className='flex '>

        <div className='flex flex-col w-[50%] px-12 pt-24'>
            <span className='font-extrabold text-6xl ml-24 '>Organize Your Academic</span>
            <span className='ml-24 mt-4'>Build your professional profile with ease
            </span>
            <span className="text-black hover:text-gray-400 border-spacing-1 ml-24 mt-6 w-32 bg-gray-300 p-2 border border-black"><Link to='/Login'>Create Account</Link></span>
        </div>

        <div className='relative flex px-12 flex-row items-center space-y-reverse'>
          <div className='absolute inset-5 bg-gray-400 w-96 h-72 opacity-50 mt-16 ml-32'></div>
          <div className='absolute inset-0 bg-gray-200 w-96 h-72 mt-16 ml-32'></div>
        </div>
    </div>
    <div className='mt-28 w-full h-48 bg-gray-300 p-4 flex flex-col'>
      <p className='text-2xl text-black text-center mt-12'>Build a standout profile to attract opportunities</p>
      <p className='text-black text-center mt-2'>Nitesh Pandey, Engineering Student</p>
    </div>
    </>
  )
}

export default HomeBody