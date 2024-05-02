import React from 'react';

const OpportunityForImprovement = ({ cocurricularData, extracurricularData }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Co-curricular Activities */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Co-curricular Activities</h2>
        <ul className="list-disc list-inside">
          {cocurricularData.map((activity, index) => {
            if (!activity.selected) {
              return (
                <li key={index} className="text-gray-600">{activity.name}</li>
              );
            }
            return null;
          })}
        </ul>
      </div>

      {/* Extra-curricular Activities */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Extra-curricular Activities</h2>
        <ul className="list-disc list-inside">
          {extracurricularData.map((activity, index) => {
            if (!activity.selected) {
              return (
                <li key={index} className="text-gray-600">{activity.name}</li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default OpportunityForImprovement;
