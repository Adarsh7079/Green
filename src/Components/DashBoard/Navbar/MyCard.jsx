import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import chip from "../../../../public/chip.png";
import bubble from "../../../../public/bubble.svg";
import c from "../../../../public/c.svg";
import d from "../../../../public/d.svg";
import e from "../../../../public/paypal.svg";

import m1 from "../../../../public/m1.png";
import m2 from "../../../../public/m2.png";
import m3 from "../../../../public/m3.png";
import arrow from "../../../../public/arrow.svg";
import send from "../../../../public/send.svg";
import Donut from "./Donut.jsx";
import Pie from "./Pie.jsx"

import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  BarElement,
} from "chart.js";
import { callback } from "chart.js/helpers";
ChartJs.register(
  BarElement,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  BarElement
);
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const [linedata, setLineData] = useState({
    labels: ["jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        labels: "first data set",
        data: [10, 80, 30, 40],
        backgroundColor: "#1814F1 ",
        borderColor: "#1814F3 ",
        tension: 0.6,
        fill: true,
        pointStyle: false,
      },
    ],
  });

  const data = {
    labels: ["sat", "sun", "Mon", "Tue", "Web", "Thu"],
    datasets: [
      {
        data: [200, 100, 200, 300, 400, 500],
        backgroundColor: "#4C49ED",

        borderWidth: 1,
      },
      {
        data: [30, 10, 20, 40, 40, 50],
        backgroundColor: "#16DBCC",

        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top", // Position of legend
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };
  return (
    <div className="w-full flex flex-col px-5 lg:px-10 bg-gray-100 overflow-x-hidden">
    <div className="flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col lg:flex-row justify-between items-center font-semibold text-gray-400">
        <div className="text-xl">My Card</div>
        <div className="flex gap-5">
          <h1>See All</h1>
          <h1>Recent Transactions</h1>
        </div>
      </div>
        {/* first  cards  */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="bg-[#4C49ED] w-full lg:w-[450px] h-[250px] rounded-xl mb-5 lg:mb-0">
            <div className="flex justify-between text-[#FFFFFF]">
              <div className="text-[16px] p-5">
                <h1>Balance</h1>
                <h1>$5,756</h1>
              </div>
              <div className=" p-5">
                <img src={chip} alt="" className=" w-[40px] h-[40px]" />
              </div>
            </div>
            <div className=" flex w-full justify-between p-5 text-[#FFFFFF]">
              <div className=" flex  flex-col">
                <h1 className=" text-gray-300">card holder</h1>
                <h1>Eddy Cusuma</h1>
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-gray-300">valid thru</h1>
                <h1>12/22</h1>
              </div>
            </div>
            <div className=" flex justify-between blur-0">
              <div className=" flex gap-2 p-5 text-xl text-white">
                <h1>3778</h1>
                <h1>****</h1>
                <h1>****</h1>
                <h1>1234</h1>
              </div>
              <img src={bubble} alt="" className=" p-5" />
            </div>
          </div>
          <div className=" bg-white md:w-[500px] w-full h-[250px] rounded-xl">
            <div className=" flex justify-between text-[#b4afaf]">
              <div className=" text-[16px] p-5">
                <h1>Balance</h1>
                <h1>$5,756</h1>
              </div>
            </div>
            <div className=" flex w-full justify-between p-5 text-[#FFFFFF]">
              <div className=" flex  flex-col">
                <h1 className=" text-gray-300">card holder</h1>
                <h1 className=" text-gray-400">Eddy Cusuma</h1>
              </div>
              <div className=" flex flex-col">
                <h1 className=" text-gray-300">valid thru</h1>
                <h1 className="text-gray-400">12/22</h1>
              </div>
            </div>
            <div className=" flex justify-between blur-0">
              <div className=" flex gap-2 p-5 text-xl text-gray-400   ">
                <h1>3778</h1>
                <h1>****</h1>
                <h1>****</h1>
                <h1>1234</h1>
              </div>
              <img src={bubble} alt="" className=" p-5" />
            </div>
          </div>

          {/* second  */}
          <div className="bg-white md:w-[500px] w-full h-[250px] rounded-xl">
            <div className="flex flex-col w-full p-10 px-10 items-start gap-5">
              <div className="w-full flex gap-20 text-sm">
                <div className=" w-[50px]">
                  <img src={c} alt="" />
                </div>
                <div className=" flex justify-between w-full">
                  <div>
                    <div className="flex items-center justify-center">
                      <h1>deposite from my Card</h1>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                      <h1>28</h1>
                      <h1>july</h1>
                      <h1>2021</h1>
                    </div>
                  </div>
                  <h1 className="text-red-500 font-semibold">-$850</h1>
                </div>{" "}
              </div>

              <div className="w-full flex gap-20 text-sm">
                <div className=" w-[50px] ">
                  <img src={e} alt="" />
                </div>
                <div className=" flex">
                  <div className="flex items-center ">
                    <h1>Jemi Wilson</h1>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <h1>25</h1>
                    <h1>january</h1>
                    <h1>2021</h1>
                  </div>
                </div>
                <h1 className="text-green-500 font-semibold">+$2,500</h1>
              </div>
              <div className="w-full flex  text-sm gap-20">
                <div className=" w-[50px] ">
                  <img src={d} alt="" />
                </div>
                <div className=" w-full flex justify-between">
                  <div className=" flex  flex-col justify-start">
                    <div className="flex justify-center">
                      <h1>Deposite Paypal</h1>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                      <h1>21</h1>
                      <h1>January</h1>
                      <h1>2021</h1>
                    </div>
                  </div>
                  <h1 className="text-green-500 font-semibold flex">+$5,500</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className="w-full flex flex-col px-10 bg-gray-100 overflow-x-hidden">
      <div className="flex flex-col gap-20">
        <div className="flex md:flex-row flex-col justify-between items-center font-semibold text-gray-400">
          <div className="mt-5 text-xl">Weekly Activity</div>
          <div className="flex gap-10 px-32">Expense Statistics</div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
          <div className="bg-white w-full md:w-[780px]  p-3 rounded-2xl mt-5 md:mt-0">
            <div className="mr-10 w-full md:w-[700px] h-[350px] rounded-full">
              {/* Render Bar chart here */}
              <Bar data={data} options={options}></Bar>
            </div>
          </div>
          <div className="bg-white w-full md:w-[500px] h-[350px] flex justify-center items-center rounded-2xl mt-5">
            {/* Render Donut chart here */}
            <Donut className />
          </div>
        </div>
      </div>
    </div>

        {/* last  */}

        <div className=" mb-20 flex md:flex-row flex-col gap-20">
          <div>
            <h1 className="ont-semibold text-gray-400">Quick Transfer</h1>
            <div className=" bg-white w-[600px] p-10 rounded-2xl">
              <div className=" flex justify-between">
                <div>
                  <img
                    src={m1}
                    alt=""
                    className=" w-[70px] h-[70px] rounded-full"
                  />
                  <h1 className=" mt-2">Liva Bator</h1>
                  <h1 className=" text-gray-400 text-center">CEO</h1>
                </div>
                <div className="">
                  <img
                    src={m2}
                    alt=""
                    className=" w-[70px] h-[70px] rounded-full"
                  />
                  <h1 className=" mt-2">Randy Press</h1>
                  <h1 className=" text-gray-400 text-center">Director</h1>
                </div>
                <div>
                  <img
                    src={m3}
                    alt=""
                    className=" w-[70px] h-[70px] rounded-full"
                  />
                  <h1 className=" mt-2">Workman</h1>
                  <h1 className=" text-gray-400 text-center">Designer</h1>
                </div>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className=" flex justify-between mt-10">
                <h1 className=" text-gray-400">Write Amount</h1>
                <div className=" relative flex mx-10">
                  <div className=" bg-[#cfd3db] rounded-s-full py-2 px-5 w-[200px] text-gray-500">
                    525.50
                  </div>
                  <div className=" flex  gap-2 absolute -mr-10 bg-[#1814F3] w-[120px] rounded-full py-2 px-5 text-white right-0">
                    send
                    <img src={send} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h1 className="ont-semibold text-gray-400">Balane History</h1>
          <div className=" bg-white w-[500px] mt-14 rounded-2xl">
            <div className="">
            <Pie/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
