import React from 'react'

const ProductComponent = ({prod}) => {
    
    return (
        <div className=" mx-auto w-full h-80 sm:w-60 sm:h-80  bg-white border rounded-md shadow-lg my-2 overflow-hidden">
            <div className="bg-white border-b-2">
                <img src={prod.image} alt="" className="h-32 mx-auto mb-5"/>
            </div>
            <div className="bg-white sm:h-10">
                <p className="bg-white p-1 text-gray-600 uppercase font-bold text-center text-xs">{prod.title}</p>
            </div>
            <div className="bg-white text-center sm:h-20 overflow-hidden ">
                <span className="bg-white text-gray-400 ">{prod.description}</span>
            </div>
            <div className="bg-white block  flex justify-center">
                <button className="bg-green-400 mx-1 mt-2 rounded-md px-5  py-1 text-gray-200">Editar</button>
                <button className="bg-red-400 mx-1 mt-2 rounded-md px-5  py-1 text-gray-200">Borrar</button>
            </div>
            
        </div>
    )
}

export default ProductComponent
