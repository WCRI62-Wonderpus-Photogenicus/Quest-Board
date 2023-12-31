import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ChartDataLabels // Register the plugin
);

const Progressbar = () => {
    const taskList = useSelector((state) => state.projects.taskList)

    const taskRatio = taskList.length

    const data = {
        datasets: [
            {
                data: [50], // Example data
                backgroundColor: 'mediumseagreen',
                borderRadius: 18,
                barThickness: 40,
            }
        ],
        labels: ['Progress'],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: { display: false,
                suggestedMin: 0,
                suggestedMax: 100, },
            y: { display: false}
        },
        plugins: {
            datalabels: {
                color: '#fff',
                align: (context) => context.chart.data.datasets[0].data[0] > 11 ? 'start' : 'end',
                anchor: 'end',
                font: { weight: 'bold' },
                formatter: (value, context) => `Project Status: ${value}%`
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <div id="progress-bar-container">
            <Bar data={data} options={options} />
        </div>
    )
}

export default Progressbar;
