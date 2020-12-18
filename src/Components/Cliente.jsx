import React from 'react'

const Cliente = ({user}) => {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap bg-white">
                <div className="flex items-center bg-white">
                <div className="flex-shrink-0 h-10 w-10 bg-white">
                    <img className="h-10 w-10 rounded-full bg-white" src={user.avatar} alt=""/>
                </div>
                <div className="ml-4 bg-white">
                    <div className="text-sm font-medium text-gray-900 bg-white">
                    {user.first_name}
                    </div>
                    <div className="text-sm text-gray-500 bg-white">
                    {user.email}
                    </div>
                </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap bg-white">
                <div className="text-sm text-gray-900 bg-white">Regional Paradigm Technician</div>
                <div className="text-sm text-gray-500 bg-white">Optimization</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap bg-white">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 bg-white">
                Active
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-white" >
                Admin
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium bg-white">
                <a href="#!" className="text-indigo-600 hover:text-indigo-900 bg-white">Edit</a>
                
            </td>
        </tr>
    )
}

export default Cliente
