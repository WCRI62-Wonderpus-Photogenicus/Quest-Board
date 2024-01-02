import React from 'react';
// chartjs is a library for data visualization
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

// register all ChartJS plugins that are being imported
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ChartDataLabels
);

const Progressbar = () => {
    // logic to check for completed tasks in state and create a ratio (completed tasks / total tasks)
    // feature is not yet created in react/redux
    const taskList = useSelector((state) => state.projects.taskList);
    const completedTasks = taskList.filter(task => task.isCompleted).length;
    const taskRatio = Math.round((completedTasks / taskList.length) * 100);

    // ChartJS requires data and options objects to create the graph
    const data = {
        datasets: [
            {
                // taskRatio variable would go in this array, replacing hard coded percentage of 65
                data: [65], // Example data
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
        // settings for customizing how the graph looks
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
            {/* data and options attributes required in this component */}
            <Bar className='status-bar' data={data} options={options} />
        </div>
    )
}

export default Progressbar;
