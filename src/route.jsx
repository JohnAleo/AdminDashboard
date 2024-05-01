import React from 'react'

import MotorComponent from './components/motor/motor';
import SideBar from './sidebar';
import { Route, Routes } from 'react-router-dom';
import CaravanComponent from './components/caravan/caravan';
import TuningComponent from './components/tuning/tuning';
import UsedCarComponent from './components/usedCar/usedCar';
import CampingComponent from './components/camping/camping';
import UserListComponent from './components/user-list/userList';

const RouterComponent = () => {
  return (
    <>
    <>
    <SideBar />
        <Routes>
            <Route path="/motor" element={<MotorComponent/>}/>
            <Route path="/caravan" element={<CaravanComponent/>}/>
            <Route path="/tuning" element={<TuningComponent/>}/>
            <Route path="/usedCar" element={<UsedCarComponent/>}/>
            <Route path="/camping" element={<CampingComponent/>}/>
            <Route path="/user-list" element={<UserListComponent/>}/>
        </Routes>
    </>
    </>
  )
}

export default RouterComponent;