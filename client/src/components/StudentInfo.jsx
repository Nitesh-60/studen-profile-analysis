import React from 'react';
import { useDispatch } from 'react-redux';
import { setStudentInfo } from '../features/studentInfo/studentInfoSlice';

const StudentInfo = () => {

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch(setStudentInfo({ [id]: value }));
  };

  return (
    <>
      <div className="text-center font-bold text-2xl mb-4">Enter your Information</div>
      <div className="flex w-full px-16">
        <div className="w-1/2 p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="studentName" className="block mb-2" >Student name:</label>
              <input type="text" id="studentName" placeholder="Your Name" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="teacherGuardianName" className="block mb-2">Teacher Guardian name:</label>
              <input type="text" id="teacherGuardianName" placeholder="Teacher Guardian Name" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block mb-2">Branch:</label>
              <input type="text" id="branch" placeholder="Branch" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="division" className="block mb-2">Division:</label>
              <input type="text" id="division" placeholder="Division" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
          </form>
        </div>

        <div className="w-1/2 p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="year" className="block mb-2">Year:</label>
              <input type="number" id="year" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="rollNumber" className="block mb-2">Roll Number:</label>
              <input type="number" id="rollNumber" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="uid" className="block mb-2">UId:</label>
              <input type="text" id="uid" placeholder="Enter unique id" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="GPA" className="block mb-2">GPA:</label>
              <input type="number" id="GPA" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" onChange={handleInputChange}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
