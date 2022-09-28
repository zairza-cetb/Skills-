import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Accordian from '../../components/Accordion/Accordion';
import { fetchDomainRegistrationStart } from '../../store/skillsUser/skillsUser.action';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchDomainRegistrationStart());
  },[])
  return (
    <div>
        <Accordian />
        <ToastContainer />
    </div>
  )
}

export default Dashboard