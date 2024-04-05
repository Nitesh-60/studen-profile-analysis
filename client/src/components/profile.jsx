import React from 'react'
import Header from "./Header"

const profile = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Profile Image */}
          <div className='flex justify-center mb-4 lg:mb-0 lg:mr-8'>
            <img src="data:image/jpeg;base64,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" alt="profile_img" className='w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg' />
          </div>

          {/* Profile Details */}
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
              <p className='font-semibold text-gray-800'>Full Name:</p>
              <p className='text-gray-600'>Nitesh Pandey</p>
            </div>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
              <p className='font-semibold text-gray-800'>Branch:</p>
              <p className='text-gray-600'>BE-IT-A</p>
            </div>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
              <p className='font-semibold text-gray-800'>UID:</p>
              <p className='text-gray-600'>20-ITA60-24</p>
            </div>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
              <p className='font-semibold text-gray-800'>Semester:</p>
              <p className='text-gray-600'>8</p>
            </div>
          </div>

          {/* Score rank */}
          <div className='flex justify-center items-center ml-56'>
            <div className='flex justify-center items-center rounded-full bg-blue-200 w-40 h-40'>
              <p className='text-3xl font-bold'>95/100</p>
              <div className='text-xl block '>Total Score</div>
            </div>
            
            <div className='flex justify-center items-center w-40 h-20 bg-red-400 shadow-lg border ml-56'>
              <p className='text-3xl font-bold'>rank1</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-full h-80 border border-green-500'>

        <div className='w-1/2 h-72 border border-yellow-500'>
          <div className='flex h-1/2'>
            <div className='w-1/2 border border-blue-500'>Academic score</div>
            <div className='w-1/2 border border-black'>Extra-curricular Score</div>
          </div>
          <div className='w-full h-1/2 border border-red-500 '>Co-curricular score</div>
        </div>

        <div className='flex'>
          <div className='rounded-full'>Opportunity for Improvement:</div>
        </div>

        <div>Dowload report</div>
        
      </div>
    </>
  )
}

export default profile