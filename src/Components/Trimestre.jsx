import React from 'react'

const Trimestre = () => {
    return (
        <div>
            <div className="my-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-4 sm:h-36">
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-400  h-35 sm:h-full rounded-md shadow-lg p-5 sm:col-span-1 grid grid-cols-3">
                        <div className="col-span-2 p-1 bg-transparent">
                            <div className="uppercase bg-transparent text-gray-100 font-bold">Correos sin contestar</div>
                            <div className="uppercase text-2xl text-gray-100 font-bold bg-transparent">123</div>
                        </div>
                        <div className="col-span-1 text-5xl text-center my-auto fotn-bold bg-transparent"><i className="fas fa-paper-plane bg-transparent text-gray-100"></i></div>
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-red-400 h-35 sm:h-full rounded-md shadow-lg p-5 sm:col-span-1 grid grid-cols-3">
                        <div className="col-span-2 p-1 bg-transparent">
                            <div className="uppercase bg-transparent text-gray-100 font-bold">Acciones incompletas</div>
                            <div className="uppercase text-2xl text-gray-100 font-bold bg-transparent">9</div>
                        </div>
                        <div className="col-span-1 text-5xl text-center my-auto fotn-bold bg-transparent"><i className="fas fa-exclamation-circle bg-transparent text-gray-100"></i></div>
                    </div>
                    <div className=" bg-gradient-to-r from-blue-600 to-blue-400 h-35 sm:h-full rounded-md shadow-lg p-5 sm:col-span-1 grid grid-cols-3">
                        <div className="col-span-2 p-1 bg-transparent">
                            <div className="uppercase bg-transparent text-gray-100 font-bold">Mensajes enviados </div>
                            <div className="uppercase text-2xl text-gray-100 font-bold bg-transparent">78</div>
                        </div>
                        <div className="col-span-1 text-5xl text-center my-auto fotn-bold bg-transparent"><i className="fas fa-comment-dots bg-transparent text-gray-100"></i></div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-400  h-35 sm:h-full rounded-md shadow-lg p-5 sm:col-span-1 grid grid-cols-3">
                        <div className="col-span-2 p-1 bg-transparent">
                            <div className="uppercase bg-transparent text-gray-100 font-bold">Mensajes enviados </div>
                            <div className="uppercase text-2xl text-gray-100 font-bold bg-transparent">78</div>
                        </div>
                        <div className="col-span-1 text-5xl text-center my-auto fotn-bold bg-transparent"><i className="fas fa-comment-dots bg-transparent text-green-100"></i></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Trimestre
