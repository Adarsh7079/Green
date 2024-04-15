import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import {
  Login,
  Signup,
  DashBoardPage,

} from "./Components/index"

import MyCard from "../src/Components/DashBoard/Navbar/MyCard.jsx"
function App() {
 

  return (
    <div className=''>
     <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboardpage" element={<DashBoardPage/>}>
             <Route path="/dashboardpage/dashboard" element={<MyCard/>}/>
             <Route path="/dashboardpage/" element={<MyCard/>}/>

          </Route>
       
      </Routes>
    </div>
  )
}

export default App
