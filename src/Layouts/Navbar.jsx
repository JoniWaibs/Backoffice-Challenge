import React, { useState } from 'react'
import Menu from '../Components/Menu'
import Avatar from '../Assets/Media/man-300x300.png'




const Navbar = () => {
    const [ nav , setNav ] = useState(false)

    const toggleMenu = () =>{
       if( nav ===true ){
           setNav(false)
       }else if( nav === false ){
           setNav(true)
       }
    };



    return (
            <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-5 ">
                <div className="block lg:hidden">
                    <button id='boton' onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                   
                </div>
                <div className=" hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent">
                    <div className="text-sm lg:flex-grow bg-white">
                        <form action="#!" className="bg-white">
                            <label htmlFor="search">
                                <input type="text" className="w-60 bg-blue-100 h-8 rounded-l-md pl-5"placeholder="Search... "/>
                                <button className="rounded-l-md bg-blue-600 rounded-r-md border h-8 ">
                                    <i class="fas fa-search bg-blue-600 text-gray-100 p-2 h-full rounded-r-md"></i>
                                </button>
                            </label>
                        </form>
                    </div>
                    <div className="bg-white flex ">
                        <div className="bg-white text-gray-400 border-r-2 my-auto mr-10 pr-10 flex">
                            <i class="fas fa-bell bg-white text-gray-400 my-auto mx-2 text-2xl"></i>
                            <i class="fas fa-envelope bg-white text-gray-400 my-auto mx-2 text-2xl"></i>
                        </div>
                        <p className="bg-white text-gray-400 border-r-2 my-auto mr-10 pr-10"> <span className="bg-white font-bold text-gray-600">Bienvenido</span> Jose Gutierrez</p>
                        <div className="flex-shrink-0 h-10 w-10 bg-white">
                            <img className="h-10 w-10 rounded-full bg-white" src={Avatar} alt=""/>
                        </div>
                    </div>
                </div>
                { nav 
                ? 
                <Menu/>
                :
                null
                } 
            </nav>
    )
}

export default Navbar
