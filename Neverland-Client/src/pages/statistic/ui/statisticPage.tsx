import React from 'react';
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface Metric {
    title: string;
    value: number;
    color: string;
}

export const statisticPage: React.FC = () => {
    // Пример данных для графиков

    const pieData = {
        labels: ['Опоздание', 'Неуважение', 'Отсутствие', 'Другие'],
        datasets: [
            {
                label: '# Нарушений',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  // Опоздание
                    'rgba(54, 162, 235, 0.6)',  // Неуважение
                    'rgba(255, 206, 86, 0.6)',  // Отсутствие
                    'rgba(75, 192, 192, 0.6)',  // Другие
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'Нарушения',
                data: [5, 9, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const barData = {
        labels: ['Организация А', 'Организация Б', 'Организация В', 'Организация Г'],
        datasets: [
            {
                label: '# Нарушений',
                data: [15, 10, 8, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Организация А
                    'rgba(54, 162, 235, 0.6)', // Организация Б
                    'rgba(255, 206, 86, 0.6)', // Организация В
                    'rgba(75, 192, 192, 0.6)', // Организация Г
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Пример метрик
    const metrics: Metric[] = [
        { title: 'Общее количество нарушений', value: 40, color: 'bg-blue-500' },
        { title: 'Открытые нарушения', value: 15, color: 'bg-yellow-500' },
        { title: 'Закрытые нарушения', value: 25, color: 'bg-green-500' },
        { title: 'Среднее время обработки', value: 3, color: 'bg-purple-500' }, // В днях
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Статистика Нарушений</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className={`p-6 rounded-lg shadow-md ${metric.color} text-white`}>
                            <h2 className="text-xl font-semibold mb-2">{metric.title}</h2>
                            <p className="text-3xl">{metric.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Распределение Нарушений по Категориям</h2>
                        <Pie data={pieData} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Динамика Нарушений во Времени</h2>
                        <Line data={lineData} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Нарушения по Организациям</h2>
                        <Bar data={barData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

