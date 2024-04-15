import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { AiOutlineTransaction } from "react-icons/ai"
const NavigationBar = () => {

    const navigate=useNavigate();
    const navLinks=[
        {
            name:"Dashboard",
            icon:`/home.png`,
            link:`/dashboardpage/dashboard`
        },
        {
            name:"Transaction",
            icon:`/tran.png`,
            link:`/dashboardpage/analytics`
        },
        {
            name:"Account",
            icon:`/acc.png`,
            link:`/dashboardpage/patients`
        },
        {
            name:"Inversment",
            icon:`/inv.png`,
            link:`/dashboardpage/profile`
        },
        {
            name:"creditloan",
            icon:`/bankdash.png`,
            link:`/dashboardpage/profile`
        },
        {
            name:"loan",
            icon:`/inv.png`,
            link:`/dashboardpage/profile`
        },
        {
            name:"service",
            icon:`/ser.png`,
            link:`/dashboardpage/profile`
        },
        {
            name:"my privacy",
            icon:`/priv.jpeg`,
            link:`/dashboardpage/profile`
        },
        {
            name:"setting",
            icon:`/setting.svg  `,
            link:`/dashboardpage/profile`
        },
    ]
 
  return (
   <div>
    
     <div className='relative hidden w-[317px] h-screen bg-gradient-to-l md:flex flex-col gap-20   text-gray-400   '>
        
        
        <div className='  flex flex-col space-y-8  px-5 py-10'>
            {
                navLinks.map((item,index)=><div
                onClick={()=>navigate(`${item.link}`)}
                  className='   w-full  rounded-xl'
                 key={index}>
                     <div className='flex w-[306px] hover:text-[#2D60FF]  font-semibold
                     transition duration-700 ease-in-out bg-opacity-50 rounded-[14px]  items-center gap-5'>
                        <img  src={item.icon} className='w-[25px] h-[25px]'/> 
                        <span className>{item.name}</span>
                     </div>
                   
                </div>)
            }
        </div>
      
    </div>
   </div>
  )
}

export default NavigationBar