"use client";
// src/PieChart.tsx

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

//register the elements for the Doughnut Chart. More info here: https://www.chartjs.org/docs/latest/getting-started/integration.html
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const data = {
    labels: ['Male', 'Female', 'Unknown'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#ff6700', '#007FFF', '#1d2951'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    // You can customize chart options here
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;