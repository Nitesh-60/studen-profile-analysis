import React from 'react'
import CheckoutStepper from './CheckoutStepper'
import StudentInfo from './StudentInfo';
import CocurricularActivities from './CocurricularActivities';
import ExtraCurricullarActivities from './ExtraCurricullarActivities';
import Header from './Header';

const CHECKOUT_STEPS = [
    {
      name: "Student Info",
      Component: () => <StudentInfo />,
    },
    {
      name: "Co-Curricular Activities",
      Component: () => <CocurricularActivities />,
    },
    {
      name: "Extra-Curricular Activities",
      Component: () => <ExtraCurricullarActivities />,
    }
    // {
    //   name: "Delivered",
    //   Component: () => <div> Your order has been delivered.</div>,
    // },
  ];

const UserInput = () => {
  return (
    <>
    <Header />
    <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </>
  )
}

export default UserInput