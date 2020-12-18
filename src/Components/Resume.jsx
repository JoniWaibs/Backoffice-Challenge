import React, { Fragment } from "react";
import Trimestre from './Trimestre'
import LastYear from './LastYear'

const Resume = () => {
  return (
    <Fragment>
        <div className=" text-center sm:text-left sm:flex sm:justify-between">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">Resumen ultimo mes</p>
            <button className="bg-blue-500 px-6 rounded-md shadow-lg font-bold text-gray-50 py-2 my-3 sm:my-0 "><i className="fas fa-cloud-download-alt bg-transparent"></i> Generar reportes</button>
        </div>
        <Trimestre/>
        <LastYear/>        
    </Fragment>
  );
};

export default Resume;
