import React from 'react';
import Header from './Header';
import OpportunityForImprovement from './OpportunityForImprovement';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {

  const [isPDFGenerating, setIsPDFGenerating] = useState(false);
  // const userData = useSelector((state) => state.user);

  const { studentName, branch, teacherGuardianName, dividion, year, rollNumber, uid, GPA} = useSelector(state => state.studentInfo);

  const inhouseActivities = useSelector(state => state.activities.inhouseActivities);
  const outhouseActivities = useSelector(state => state.activities.outhouseActivities);
  const extra_curricular_activities = useSelector((state) => state.extracurricular.activities);
  const cocurricular_activity = {...inhouseActivities, ...outhouseActivities};

  const generatePDF = () => {
    setIsPDFGenerating(true);
  };



  const PDFDocument = (
    <Document>
      <Page size="A4">
        <View>
          <Text>Name: {studentName}</Text>
          <Text>Branch: {branch}</Text>
          <Text>UID: {uid}</Text>
          <Text>Roll no: {rollNumber}</Text>
          {/* Include other student details here */}
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <Header />
      <div className="mx-32 bg-cyan-300 mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            {/* Profile Image */}
            <div className="flex justify-center mb-4 lg:mb-0 lg:mr-8 relative">
              <img
                src="data:image/jpeg;base64,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"
                alt="profile_img"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg border-4 border-blue-500"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 text-white py-1 px-2 rounded-lg text-xs">Online</div>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="font-semibold text-gray-800">Full Name:</p>
                <p className="text-gray-600">Nitesh Pandey</p>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="font-semibold text-gray-800">Branch:</p>
                <p className="text-gray-600">BE-IT-A</p>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="font-semibold text-gray-800">UID:</p>
                <p className="text-gray-600">20-ITA60-24</p>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="font-semibold text-gray-800">Semester:</p>
                <p className="text-gray-600">8</p>
              </div>
            </div>

            {/* Score rank */}
            <div className="flex flex-row justify-center items-center lg:ml-auto gap-60 mr-24">
              <div className="flex flex-col items-center justify-center bg-blue-200 w-32 h-32 lg:w-40 lg:h-40 rounded-full shadow-lg border">
                <p className="text-2xl lg:text-3xl font-bold mb-2">81.8/100</p>
                <div className="text-base lg:text-lg text-center mb-2">Total Score</div>
              </div>

              <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 w-32 h-16 lg:w-40 lg:h-20 bg-red-400 shadow-lg border rounded-full">
                <p className="text-lg lg:text-xl font-bold text-white">Rank 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Score Sections */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1  rounded-lg p-4 shadow-xl hover:shadow-2xl transition duration-500">
              <h2 className="text-lg font-semibold mb-4">Academic Score</h2>
              <p className="mb-2">GPA: 9.14</p>
              <p className="mb-2">Score: 54.8/60</p>
            </div>

            <div className="flex-1  rounded-lg p-4 shadow-xl hover:shadow-2xl transition duration-500">
              <h2 className="text-lg font-semibold mb-4">Extra-curricular Score</h2>
              <p className="mb-2">In-house Activity Score: 7</p>
              <p className="mb-2">Outhouse Activity Score: 8</p>
              <p className="mb-2">Total Score: 15/20</p>
            </div>

            <div className="flex-1  rounded-lg p-4 shadow-xl hover:shadow-2xl transition duration-500">
              <h2 className="text-lg font-semibold mb-4">Co-curricular Score</h2>
              <p className="mb-2">Total Score: 12/20</p>
            </div>
          </div>
        </div>

        

        {/* Opportunity for Improvement and Download Report */}
        <div className="container mx-auto px-4 py-8">
        <PDFViewer width="100%" height={600}>
            {isPDFGenerating ? PDFDocument : null}
          </PDFViewer>
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-yellow-500 px-4 py-2 text-white font-semibold shadow-lg hover:shadow-xl transition duration-500">
            {/* <OpportunityForImprovement
              cocurricularData={cocurricular_activity}
              extracurricularData={extra_curricular_activities}
            /> */}
            Opportunity For Improvement
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300" onClick={generatePDF}>
              Download Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
