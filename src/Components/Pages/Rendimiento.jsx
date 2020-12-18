import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Sidebar from '../../Layouts/Sidebar'
import RendimientoComponent from '../RendimientoComponent'

const Rendimiento = () => {
    return (
        <div>
            <div className="sm:grid sm:grid-cols-12 sm:h-screen ">

            <div className="col-span-2 max-h-screen">
                <Sidebar/>
            </div>

            <div className="col-span-10 h-20">
                <Navbar/>
                <div className="mt-10 container w-11/12 mx-auto  ">
                    <RendimientoComponent/>
                </div>  
            </div>
            </div>
            
        </div>
    )
}

export default Rendimiento
