/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const navigate = useNavigate(); // Initialize useHistory

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });

  useEffect(() => {
    const marginLeft = stepRef.current[0]?.offsetWidth / 2 || 0;
    const marginRight =
      stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0;
    setMargins({ marginLeft, marginRight });
  }, [stepsConfig.length]);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        navigate("/profile"); // Redirect to '/profile' page
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="relative flex justify-between items-center stepper mb-8 z-100 px-12 mt-12">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`flex flex-col items-center step ${
              currentStep > index + 1 || isComplete ? "bg-green-500 text-white" : "bg-gray-400"
            } ${currentStep === index + 1 ? "bg-blue-500 text-white" : ""} rounded-lg py-2 px-4`}
          >
            <div className="w-8 h-8 rounded-full flex justify-center items-center mb-2 z-2 bg-white border-2 border-blue-500">
              {currentStep > index + 1 || isComplete ? (
                <span className="text-blue-500">&#10003;</span>
              ) : (
                <span className="text-gray-500">{index + 1}</span>
              )}
            </div>
            <div className="text-base">{step.name}</div>
          </div>
        ))}

        <div
          className="absolute top-1/4 left-0 h-4 bg-gray-400 w-full rounded-lg -z-20 mt-3"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="h-full bg-green-500 transition-all duration-200 rounded-lg"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      {!isComplete && (
        <div className="flex justify-center">
          <button
            className="w-24 btn bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600 items-center"
            onClick={handleNext}
          >
            {currentStep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutStepper;
