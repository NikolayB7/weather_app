import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import faker from 'faker'
// Убираем точки данных из графика

const Chart = ({ data }) => {

    useEffect(() => {
        let res = data.map((el) => {
            return new Date(`2000-01-01T${el.time}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        })
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0, // Устанавливаем радиус точки на 0, чтобы скрыть её
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Устанавливаем display: false, чтобы скрыть сетку по оси X
                }
            },
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false // Устанавливаем display: false, чтобы скрыть сетку по оси Y
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
            tooltip: {
                enabled: false, // Отключаем всплывающую подсказку
            },
            datalabels: {
                backgroundColor: function(context) {
                    console.log(context)
                    // return context.dataset.backgroundColor = "#000000";
                    // return context.dataset.borderColor;
                },
                borderRadius: 4,
                color: '#6d1010',
                font: {
                    weight: 'bold'
                },
                formatter: function(value, context) {
                    return value; // Выводим значение над точкой
                },
                anchor: 'end', // Выравнивание текста относительно точки
                align: 'end', // Выравнивание текста относительно точки
                offset: 8 // Расстояние между текстом и точкой
            }
        },

    };

    const labels = data.map((el) => {
        return new Date(`2000-01-01T${el.time}`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    });

    const config = {
        labels,
        datasets: [
            {
                fill: false,
                label: 'temperature',
                data: data.map((el) => el.temperature),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className="chart-wrapper">
            <Line options={options} plugins={[ChartDataLabels]} data={config} />
        </div>
    );
};

export default Chart;