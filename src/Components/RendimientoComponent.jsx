import React from 'react'
import { Doughnut, Line , Bar} from 'react-chartjs-2';
import {  Meses } from '../Config/Consts'



const RendimientoComponent = () => {
    return (
        <div>
            <div className="my-20">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 sm:h-4/6">
                <div className="bg-gray-100 h-60 sm:h-72 rounded-md shadow-lg  sm:col-span-3  mb-20 sm:my-0">
                        <div className="bg-blue-100 h-12 rounded-t-md text-center font-bold p-3 text-blue-600"> Reporte articulos </div>
                        <div class="h-60">
                        <Line
                            data={{
                                responsive:true,
                                labels: Meses.map( mes => mes),
                                datasets: [{
                                    label: 'Remeras',
                                    data: [25, 49, 39, 34,90,30,70,70,90,76,80,140],
                                    backgroundColor: [
                                       ' rgba(5, 150, 105, 0.8)'
                                    ],
                                    borderColor: [
                                        ' rgba(5, 150, 105, 1)'
                                    ],
                                    borderWidth: 3
                                },{
                                    label: 'Joyas',
                                    data: [100, 110 , 70, 66 , 55 , 53 , 50 , 65 , 69,  77 , 80 , 88, 70 ],
                                    backgroundColor: [
                                        'rgba(37, 99, 235, 0.8)',
                                    ],
                                    borderColor: [
                                        'rgba(37, 99, 235, 1)',
                                    ],
                                    borderWidth: 3
                                },{
                                    label: 'Calzado',
                                    data: [ 72,80,85,90,30,70,70,90,76,80,68, 50],
                                    backgroundColor: [
                                        'rgba(219, 39, 119, 0.8)',
                                    ],
                                    borderColor: [
                                        'rgba(219, 39, 119, 1)',
                                    ],
                                    borderWidth: 3
                                }
                            ],
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
                            height={25}
                            options={
                                { maintainAspectRatio: false ,  animation: { duration: 1000 }, scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }}
                            }
                        />
                        </div>
                    </div>
                    <div className="bg-blue-100 h-60 sm:h-72 rounded-md shadow-lg  sm:col-span-1">
                        <div className="bg-blue-100 h-12 rounded-t-md text-center font-bold p-3 text-blue-600"> Objetivo anual de ventas </div>
                        <div class=" h-60">
                        <Doughnut
                                    data={{
                                        responsive:true,
                                        labels: ['Cumplido', 'Por cumplir'],
                                        datasets: [{
                                            data: [80,20],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.6)',
                                                'rgba(156, 163, 175, 0.6)',
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(156, 163, 175, 1)',
                                            ],
                                            borderWidth: 1
                                        }]
                                    }}
                                    width={100}
                                    height={80}
                                    options={
                                        { maintainAspectRatio: true ,  animation: { duration: 1000 }
                                        }
                                    }
                            />
                        </div>
                    </div>
                    <div className="bg-gray-100 h-60 sm:h-72 rounded-md shadow-lg  sm:col-span-4 mt-32 sm:mt-0">
                        <div className="bg-blue-100 h-12 rounded-t-md text-center font-bold p-3 text-blue-600"> Rendimiento total anual</div>
                        <div class="h-60 bg-white rounded-md">
                            <Bar
                               data={{
                                responsive:true,
                                labels: Meses.map( mes => mes),
                                datasets: [{
                                    label: 'Ganancia',
                                    data: [100, 110 , 70, 66 , 55 , 53 , 50 , 65 , 69,  77 , 80 , 88, 70 ],
                                    backgroundColor: [
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                       ' rgba(5, 150, 105, 1)',
                                    ],
                                    borderColor: [
                                        ' rgba(5, 150, 105, 1)'
                                    ],
                                    borderWidth: 3
                                },{
                                    label: 'Gastos',
                                    data: [76, 90 , 30, 25 , 22 , 20 , 27 , 30 , 31,  29 , 35 , 58, 79 ],
                                    backgroundColor: [
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                        'rgba(220, 38, 38, 1)',
                                    ],
                                    borderColor: [
                                        'rgba(220, 38, 38, 1)',
                                    ],
                                    borderWidth: 3
                                }
                            ],
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
                            height={25}
                            options={
                                { maintainAspectRatio: false ,  animation: { duration: 1000 }, scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }}
                            }
                             
                             
                             
                             
                            />      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RendimientoComponent
