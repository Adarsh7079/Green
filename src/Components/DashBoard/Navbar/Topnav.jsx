import React from "react";
import bank from "../../../../public/bankdash.png";
import { CiSearch } from "react-icons/ci";
import alert from "../../../../public/alert.svg"
import sting from "../../../../public/sting.svg"
import girls from "../../../../public/girls.png"
import { RiEqualFill } from "react-icons/ri";


const Topnav = () => {
  return (
    <div className=" w-full bg-white   ">
      <div className=" hidden w-full md:flex justify-between px-5">
        <div className=" flex gap-[200px]" >
          <div className=" flex gap-2"  >
            <img src={bank} alt="" className=" py-3" />
            <h1 className=" flex items-center"> Bankdash</h1>
          </div>
          <div>
            <h1 className=" p-3">Overview</h1>
          </div>
        </div>

        <div className=" flex gap-3 py-3">
           <div className=" flex bg-[#dad9e0] w-full items-center rounded-full px-3 h-[40px] ">
            <CiSearch  />
            <input type="serach"
            className=" outline-none px-2 bg-[#dad9e0] w-[150px] rounded-r-full" />
           </div>
           <div className=" flex gap-3">
            <div>
              <img src={alert} alt="" />
            </div>
            <div> <img src={sting} alt="" /></div>
            <div>
            <img src={girls} alt=""
            className=" rounded-full w-[70px] h-[40px]" />
            </div>
           </div>
        </div>
      </div>


      {/* mobile */}
      <div className=" md:hidden w-full flex justify-between px-5 items-center ">
        <div className=" text-xl "  >
        &#x2630;
        </div>
        <div>
            <h1 className=" p-3">Overview</h1>
          </div>
        <div className=" flex gap-3 py-3">
           
            <img src={girls} alt=""
            className=" rounded-full w-[50px] h-[50px]" />
          
    
        </div>
      </div>
    </div>
  );
};

export default Topnav;
