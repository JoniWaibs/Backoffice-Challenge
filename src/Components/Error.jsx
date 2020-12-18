import React from 'react'

const Error = ({alert}) => {
    return (
        <div className="text-center max-w-full">
            <p className="bg-red-300 text-red-700 py-2 rounded shadow-md font-bold">{alert}</p>
        </div>
    )
}

export default Error;
