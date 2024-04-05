// src/features/studentInfo/studentInfoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  studentName: '',
  teacherGuardianName: '',
  branch: '',
  division: '',
  year: 0,
  rollNumber: 0,
  uid: '',
  GPA: 0,
};

const studentInfoSlice = createSlice({
  name: 'studentInfo',
  initialState,
  reducers: {
    setStudentInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStudentInfo } = studentInfoSlice.actions;

export default studentInfoSlice.reducer;
