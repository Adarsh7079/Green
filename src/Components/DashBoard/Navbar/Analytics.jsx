import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


const Analytics = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col px-10 bg-gray-100 overflow-x-hidden">
      <div>
        <div className=' flex justify-between'>
          <div
              className="w-[229px] h-[54px] text-center text-cyan-600 text-4xl 
            font-semibold font-['League Spartan'] leading-[80px]"
            >
              Analytics
          </div>
          <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  id="hospital"
                  name="hospital"
                
                  className="mt-5 w-[230px] h-[34px] text-slate-300 text-xl flex justify-between items-center text-start duration-300 px-3 border-2"
                >asdasd
              
                  {!isOpen ? (
                    <RiArrowDropDownLine className="h-[30px] -mx-7 flex items-center text-slate-300 w-[60px]  " />
                  ) : (
                    <RiArrowDropUpLine className=" h-[30px] -mx-7 flex items-cente text-slate-300 w-[60px] " />
                  )}
            </div>
        </div>
         <div>
         <div
              className="bg-no-repeat  w-[730px] h-[360px] 
                flex flex-col  mt-5 text-gray-600  border-2 border-gray-300 bg-white rounded-2xl "
            >
              <div className="flex flex-col  gap-12">
                <div className="w-[136px] h-[34px] text-center text-zinc-400 text-xl font-normal font-['Poppins'] leading-[80px]">
                  Scenes
                </div>
                <div className=" w-full h-[250px] flex flex-col gap-5 overflow-y-scroll scrollbar-hide px-10">
                
                <progress value={90}  max={100} className=' rounded-lg'/>
                </div>
              </div>
            </div>
         </div>
         <div></div>
      </div>
    </div>
  )
}

export default Analytics