import React from 'react'
import { Line } from 'react-chartjs-2';
import { Days } from '../Config/Consts'


const LastYear = () => {
    return (
        <div>
             <div className="my-5 ">
                <div className="sm:h-96">
                    <div className="bg-blue-100  sm:h-10 rounded-t-md shadow-lg sm:col-span-1">
                        <p className="bg-blue-100 h-auto rounded-t-md font-bold p-2 text-xl text-blue-600">Ventas ultimo mes</p>
                    </div>
                    <div className="bg-gray-200 h-60 sm:h-full rounded-b-md shadow-lg p-5 sm:col-span-1">
                        <Line
                            data={{
                                responsive:false,
                                labels: Days.map( day => day),
                                datasets: [{
                                    label: 'Ventas Mensuales',
                                    data: [0,   25, 49, 39, 34,90,30,70,70,90,76,80,90,98,99,89,80,76,72,80,85,90,30,70,70,90,76,80,90,95,99],
                                    backgroundColor: [
                                        'rgba(37, 99, 235, 0.6)',
                                    ],
                                    borderColor: [
                                        'rgba(37, 99, 235, 1)',

                                    ],
                                    borderWidth: 3
                                }],
                                options: {
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }
                            }}
                            width={100}
                            height={50}
                            options={{ maintainAspectRatio: false }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastYear
