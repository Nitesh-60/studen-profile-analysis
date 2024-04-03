import React, { useState } from "react";

const CocurricularActivities = () => {
  const [inhouseActivities, setInhouseActivities] = useState({
    onlineCertificateCourse: "",
    seminarAttended: "",
    departmentSupportProject: "",
    workshopAttended: "",
    paperPresentedInhouse: "",
    bridgeCourseAttended: "",
    eventOrganized: "",
  });

  const [outhouseActivities, setOuthouseActivities] = useState({
    PaperPresentedOutHouse: "",
    ProjectCompetitionOrHackathon: "",
    Internship: "",
    CompetitiveExam: "",
    OnlineCertificateCourse: "",
    PatentPublished: "",
  });

  const handleChange = (activityType, value) => {
    setInhouseActivities({ ...inhouseActivities, [activityType]: value });
  };
  const handleOutHouseChange = (activityType, value) => {
    setOuthouseActivities({ ...outhouseActivities, [activityType]: value });
  };
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
    </div>
  );
};

export default CocurricularActivities;
