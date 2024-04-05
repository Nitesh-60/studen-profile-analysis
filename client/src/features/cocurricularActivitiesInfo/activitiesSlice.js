// activitiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inhouseActivities: {
    onlineCertificateCourse: '',
    seminarAttended: '',
    departmentSupportProject: '',
    workshopAttended: '',
    paperPresentedInhouse: '',
    bridgeCourseAttended: '',
    eventOrganized: '',
  },
  outhouseActivities: {
    PaperPresentedOutHouse: '',
    ProjectCompetitionOrHackathon: '',
    Internship: '',
    CompetitiveExam: '',
    OnlineCertificateCourse: '',
    PatentPublished: '',
  },
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    updateInhouseActivity: (state, action) => {
      const { activityType, value } = action.payload;
      state.inhouseActivities[activityType] = value;
    },
    updateOuthouseActivity: (state, action) => {
      const { activityType, value } = action.payload;
      state.outhouseActivities[activityType] = value;
    },
  },
});

export const { updateInhouseActivity, updateOuthouseActivity } = activitiesSlice.actions;

export default activitiesSlice.reducer;
