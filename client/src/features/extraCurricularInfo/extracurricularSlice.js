import { createSlice } from '@reduxjs/toolkit';

const extracurricularSlice = createSlice({
  name: 'extracurricular',
  initialState: {
    activities: {
      soujournOrZephyr: '',
      nss: '',
      helpToSociety: '',
      sportsOrInertia: '',
      eWeekOrEdcProject: '',
    },
  },
  reducers: {
    setActivity: (state, action) => {
      const { activityType, value } = action.payload;
      state.activities[activityType] = value;
    },
  },
});

export const { setActivity } = extracurricularSlice.actions;
export default extracurricularSlice.reducer;
