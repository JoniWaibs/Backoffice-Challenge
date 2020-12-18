import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen pb-60 hidden sm:block ">
            <div className="h-12 border-b-2 border-blue-400 bg-transparent">
                <h1 className="bg-transparent text-3xl font-bold text-gray-100 text-center my-auto pt-5">Dashboard</h1>
            </div>

            <div className="bg-transparent">
                <ul className="bg-transparent mt-15">
                    <li className="bg-blue-800 py-5 grid grid-cols-5 pl-5">
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className=" bg-transparent text-xl text-gray-100">Negocio</p>
                        </div>
                    </li>
                    <Link to={'/main'} className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i class="fas fa-user-secret bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent  text-gray-100">Resumen</p>
                        </div>
                    </Link>
                    <Link to={'/products'} className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i class="fas fa-tags bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent  text-gray-100">Poductos</p>
                        </div>
                    </Link>
                    <Link to={'/clients'} className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i class="fas fa-user-tie bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent  text-gray-100">Clientes</p>
                        </div>
                    </Link>
                </ul>
                
                <ul className="bg-transparent mt-5">
                    <li className="bg-blue-800 py-5 grid grid-cols-5 pl-5">
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className=" bg-transparent text-xl text-gray-100">Graficos</p>
                        </div>
                    </li>
                    <Link to={'/rendimiento'} className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i className="fas fa-chart-pie bg-transparent font-bold text-gray-100"></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent text-gray-100 w-96">Rendimiento</p>
                        </div>
                    </Link>
                </ul>
                <ul className="bg-transparent mt-5">
                    <li className="bg-blue-800 py-5 grid grid-cols-5 pl-5">
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className=" bg-transparent text-xl text-gray-100 w-96">Acciones MKT</p>
                        </div>
                    </li>
                    <Link to={'/media'} className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i className="fab fa-twitter bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent  text-gray-100 w-96">Redes sociales</p>
                        </div>
                    </Link>
                    <a href="#!" className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i className="fas fa-envelope bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p href="#!" className="bg-transparent  text-gray-100">Emails</p>
                        </div>
                    </a>
                    <a href="#!"  className="bg-transparent py-4  grid grid-cols-5 pl-5">
                        <div className="span-col-1 bg-transparent">
                            <i className="fas fa-calendar-check bg-transparent font-bold text-gray-100 "></i>
                        </div>
                        <div className="span-col-4 bg-transparent">
                            <p className="bg-transparent  text-gray-100">Calendario</p>
                        </div>
                    </a>
                </ul>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Sidebar
