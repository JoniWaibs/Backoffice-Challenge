import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from '../Assets/Media/logo_black.svg'

const Signin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8 p-5 rounded-xl shadow-md">
                <div className="text-center ">
                    <img src={Logo} alt="mailup-logo" className="w-3/5 mx-auto my-5"/>
                    <h1 className="text-3xl mt-10">Crear una cuenta <span className="font-bold">gratis!</span> </h1>
                </div>
                <form action="#" className="min-w-full">
                    <div className="max-w-full mt-5 sm:grid sm:grid-cols-2 sm:gap-2">
                        <div className="mt-5">
                            <label htmlFor="name">Nombre:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="block w-full py-3 px-2 bg-white rounded-md" 
                                placeholder="ej: jhon@jhon.com" />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="last">Apellido:</label>
                            <input
                                type="text" 
                                name="last" 
                                id="last" 
                                className="block w-full py-3 px-2 bg-white rounded-md" 
                                placeholder="ej: jhon@jhon.com" />
                        </div>
                    </div>
                    <div className="min-w-full mt-5">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="block w-full py-3 px-2 bg-white rounded-md" 
                            placeholder="ej: jhon@jhon.com" />
                    </div>
                    <div className="min-w-full my-5">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="block w-full py-3 px-2 bg-white rounded-md border-red-500 " 
                            placeholder="**********" />
                    </div>
                    <div className="min-w-full my-5">
                        <button type="submit" className="block w-full duration-200 hover:bg-blue-400 bg-blue-300 py-3 rounded-md text-white uppercase text-xl">Registrar</button>
                    </div>
                    <div className="min-w-full my-5 text-center">
                        <div  className=" my-5">
                            <Link to={'/'} className="hover:text-blue-400">Ya tienes cuenta? <span className="font-bold">iniciá sesion</span> </Link>
                        </div>
                    </div>
                </form>        
            </div>
        
        
        </div>
    )
}

export default Signin
