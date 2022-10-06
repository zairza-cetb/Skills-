import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    </div>
  )
}

export default Dashboard