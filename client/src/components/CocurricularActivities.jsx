import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateInhouseActivity, updateOuthouseActivity } from '../features/cocurricularActivitiesInfo/activitiesSlice';


const CocurricularActivities = () => {

  const inhouseActivities = useSelector(state => state.activities.inhouseActivities);
  const outhouseActivities = useSelector(state => state.activities.outhouseActivities);
  const dispatch = useDispatch();


  const handleChange = (activityType, value) => {
    dispatch(updateInhouseActivity({ activityType, value }));
  };

  const handleOutHouseChange = (activityType, value) => {
    dispatch(updateOuthouseActivity({ activityType, value }));
  };

  const calculateScore = (activities, weight) => {
    let totalMarks = 0;
    Object.values(activities).forEach((activity) => {
      if (activity === "Yes") {
        totalMarks += weight;
      }
    });
    return parseInt((totalMarks / 100) * 10);
  };

  const inhouseScore = calculateScore(inhouseActivities, 14.287);
  const outhouseScore = calculateScore(outhouseActivities, 17);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">In-house Activities</h2>
        <div className="space-y-4">
          {Object.keys(inhouseActivities).map((activityType, index) => (
            <div key={index} className="flex items-center justify-between">
              <label htmlFor={`${activityType}-yes`} className="cursor-pointer">
                {activityType.replace(/([A-Z])/g, " $1").trim()}:
              </label>
              <div className="flex space-x-4">
                <label htmlFor={`${activityType}-yes`} className="cursor-pointer">
                  Yes
                  <input
                    type="radio"
                    id={`${activityType}-yes`}
                    name={activityType}
                    value="Yes"
                    checked={inhouseActivities[activityType] === "Yes"}
                    onChange={() => handleChange(activityType, "Yes")}
                  />
                </label>
                <label htmlFor={`${activityType}-no`} className="cursor-pointer">
                  No
                  <input
                    type="radio"
                    id={`${activityType}-no`}
                    name={activityType}
                    value="No"
                    checked={inhouseActivities[activityType] === "No"}
                    onChange={() => handleChange(activityType, "No")}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional code for outhouse activities */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Outhouse Activities</h2>
        <div className="space-y-4">
          {Object.keys(outhouseActivities).map((activityType, index) => (
            <div key={index} className="flex items-center justify-between">
              <label htmlFor={`${activityType}-yes`} className="cursor-pointer">
                {activityType.replace(/([A-Z])/g, " $1").trim()}:
              </label>
              <div className="flex space-x-4">
                <label htmlFor={`${activityType}-yes`} className="cursor-pointer">
                  Yes
                  <input
                    type="radio"
                    id={`${activityType}-yes`}
                    name={activityType}
                    value="Yes"
                    checked={outhouseActivities[activityType] === "Yes"}
                    onChange={() => handleOutHouseChange(activityType, "Yes")}
                  />
                </label>
                <label htmlFor={`${activityType}-no`} className="cursor-pointer">
                  No
                  <input
                    type="radio"
                    id={`${activityType}-no`}
                    name={activityType}
                    value="No"
                    checked={outhouseActivities[activityType] === "No"}
                    onChange={() => handleOutHouseChange(activityType, "No")}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Score display */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 mt-8">
        <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Score Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>In-house Score:</span>
            <span>{inhouseScore}</span>
          </div>
          <div className="flex justify-between">
            <span>Outhouse Score:</span>
            <span>{outhouseScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocurricularActivities;
