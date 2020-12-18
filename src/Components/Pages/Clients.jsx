import React, { useState , useEffect } from 'react'
import Navbar from '../../Layouts/Navbar'
import Sidebar from '../../Layouts/Sidebar'
import {clienteAxios} from '../../Config/Axios'
import Cliente from '../Cliente'

const Clients = () => {
    const [ users , setUsers ] = useState([])

    useEffect(()=>{
        
        const constultaApi = async () =>{

            try {
                const result = await clienteAxios.get('/users')
                setUsers(result.data.data)
                
            } catch (error) {
                console.log(error)
            }

        }
        constultaApi()
    },[])
    console.log(users)
    if( !users ) return null
    
  
    return (
        <div className="sm:grid sm:grid-cols-12 sm:h-screen ">

                <div className="col-span-2 max-h-screen">
                    <Sidebar/>
                </div>

                <div className="col-span-10">
                    <Navbar/>
                    <div className="mt-10 container w-11/12 mx-auto  border rounded-md h-96 bg-white">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-blue-50">
                                                <tr>
                                                <th scope="col" className="bg-blue-50 text-blue-600 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="bg-blue-50 text-blue-600 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Title
                                                </th>
                                                <th scope="col" className="bg-blue-50 text-blue-600 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="bg-blue-50 text-blue-600 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                <th scope="col" className="bg-blue-50 text-blue-600 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Edit
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                            { users.length > 0 
                                            ?
                                                users.map( user=> (
                                                    <Cliente key={user.id} user={user}/>
                                                ))
                                            :
                                                null
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    )
}

export default Clients
