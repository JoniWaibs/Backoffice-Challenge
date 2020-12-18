import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent">
            <div className="text-sm lg:flex-grow bg-transparent">
                <Link to={'/main'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Resumen
                </Link>
                <Link to={'/products'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Productos
                </Link>
                <Link to={'/clients'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Clientes
                </Link>
                <Link to={'/rendimiento'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Rendimiento
                </Link>
                <Link to={'/media'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    RRSS
                </Link>
                <Link to={'/main'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Emails
                </Link>
                <Link to={'/main'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-600 text-xl font-bold  px-4 bg-transparent">
                    Calendario
                </Link>
            </div>
            <div>
                <a href="#!" className=" hidden inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
    )
}

export default Menu
