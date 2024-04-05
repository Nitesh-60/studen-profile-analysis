import { configureStore } from '@reduxjs/toolkit';
import studentInfoReducer from '../features/studentInfo/studentInfoSlice';
import activitiesReducer from '../features/cocurricularActivitiesInfo/activitiesSlice'
import extracurricularReducer from '../features/extraCurricularInfo/extracurricularSlice';
import userReducer from "../features/registerUser/userSlice";

const store = configureStore({
  reducer: {
    studentInfo: studentInfoReducer,
    activities: activitiesReducer,
    extracurricular: extracurricularReducer,
    user: userReducer,
  },
});

export default store;