import React from 'react'
import CheckoutStepper from './CheckoutStepper'
import StudentInfo from './StudentInfo';
import CocurricularActivities from './CocurricularActivities';
import ExtraCurricullarActivities from './ExtraCurricullarActivities';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../utils/store';


const CHECKOUT_STEPS = [
    {
      name: "Student Info",
      Component: () => <Provider store={store}><StudentInfo /></Provider>,
    },
    {
      name: "Co-Curricular Activities",
      Component: () => <Provider store={store}><CocurricularActivities /></Provider>,
    },
    {
      name: "Extra-Curricular Activities",
      Component: () => <Provider store={store}><ExtraCurricullarActivities /></Provider>,
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