import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const Progressbar = () => {
    const data = {
        datasets: [
            {
                label: '123',
                data: [1, 2, 3],
                backgroundColor: 'mediumseagreen',
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }

  return (
    <div>
        <Bar>
        data = {data}
        options = {options}
        </Bar>
    </div>
  )
}

export default Progressbar;

 
  
  