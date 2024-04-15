import React, { useState } from "react";

import { Line } from "react-chartjs-2";
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
} from "chart.js";
ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Pie = () => {
  const [linedata, setLineData] = useState({
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        labels: "first data set",
        data: [200, 800, 400, 300, 800, 600, 200, 300, 400],
        backgroundColor: "blue ",
        borderColor: "blue ",
        tension: 0.6,
        fill: true,
        pointStyle: false,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: true,
      },
    },
  };
  return (
    <div className=" -mt-12 mr-10 w-[600px] h-[280px] p-5 ">
      {/* we will add graph here  */}
      <Line data={linedata} options={options} />
    </div>
  );
};

export default Pie;
