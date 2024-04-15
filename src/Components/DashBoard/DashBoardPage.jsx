import React from 'react';
import NavigationBar from './Navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Topnav from './Navbar/Topnav';


const DashBoardPage = () => {
  return (
    <div >

        {/* Navigation Bar  */}
        <Topnav/>
        <div className='flex'>
        <NavigationBar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardPage