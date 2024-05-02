import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const Profile = () => {
  // Assuming you have Redux store set up and the necessary data is available in the store
  const { studentName, branch, teacherGuardianName, dividion, year, rollNumber, uid, GPA} = useSelector(state => state.studentInfo);
  // const 

  // PDF document styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 20,
      marginBottom: 10,
    },
    content: {
      fontSize: 12,
    },
  });

  // PDF content component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Student Information</Text>
          <Text style={styles.content}>Full Name: {studentName}</Text>
          <Text style={styles.content}>Branch: {branch}</Text>
          <Text style={styles.content}>UID: {uid}</Text>
          <Text style={styles.content}>roll no: {rollNumber}</Text>
        </View>
        {/* <View style={styles.section}>
          <Text style={styles.header}>Scores</Text>
          <Text style={styles.content}>Academic Score: {academicScore}</Text>
          <Text style={styles.content}>In-house Activity Score: {inhouseActivityScore}</Text>
          <Text style={styles.content}>Outhouse Activity Score: {outhouseActivityScore}</Text>
          <Text style={styles.content}>Co-curricular Score: {cocurricularScore}</Text>
        </View> */}
      </Page>
    </Document>
  );

  return (
    <>
      <Header />
      <div className='container mx-auto px-4 py-8'>
        {/* Profile details */}
        {/* Score rank */}

        {/* Download PDF button */}
        <div className='flex justify-center items-center mt-8'>
          <PDFDownloadLink document={<MyDocument />} fileName="student_report.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF Report'
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
