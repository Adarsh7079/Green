import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJs.register(ArcElement, Tooltip, Legend);

const Donut = () => {
    const data = {
        datasets: [{
            data: [20, 30, 15, 35],
            backgroundColor: ["#343C6A", "#FA00FF", "#1814F3", "#FFC879"],
            borderColor: ["#5E4200", "#956F00", "#E5A500", "#FFC879"],
        }],
    };

    const options = {
        cutoutPercentage: 0, // Remove the gap in the middle
    };

    return (
        <div >
            <Doughnut
                options={options}
                data={data}
            />
        </div>
    );
};

export default Donut;
