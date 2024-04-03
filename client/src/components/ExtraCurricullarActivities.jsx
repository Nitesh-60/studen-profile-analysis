import React, { useState } from "react";

const ExtracurricularActivities = () => {
  const [activities, setActivities] = useState({
    soujournOrZephyr: "",
    nss: "",
    helpToSociety: "",
    sportsOrInertia: "",
    eWeekOrEdcProject: "",
  });

  const handleChange = (activityType, value) => {
    setActivities({ ...activities, [activityType]: value });
  };

  const calculateScore = () => {
    const scoreWeight = 20; // 20% weight for Extra-Curricular Score
    const totalActivities = Object.keys(activities).length;
    let yesCount = 0;
    Object.values(activities).forEach((value) => {
      if (value === "Yes") {
        yesCount++;
      }
    });
    const score = (yesCount / totalActivities) * scoreWeight;
    return score.toFixed(2);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Extra-Curricular Activities</h2>
        <div className="space-y-4">
          {Object.keys(activities).map((activityType, index) => (
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
                    checked={activities[activityType] === "Yes"}
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
                    checked={activities[activityType] === "No"}
                    onChange={() => handleChange(activityType, "No")}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Extra-Curricular Score</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="score" className="font-semibold">Total Score:</label>
            <span id="score">{calculateScore()}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
