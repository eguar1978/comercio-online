import React from 'react'
import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Alert = () => {

    const [alerta, setAlerta] = useState("slide-in-elliptic-top-fwd");

    const cerrarAlerta = () => {
        setAlerta('slide-out-elliptic-top-bck');
    }

    return (
        <>
                <div className={`${alerta} fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm`}>
                    <input type="checkbox" className="hidden" id="footertoast" />

                    <label className="close cursor-pointer flex items-start justify-between w-full p-4 bg-red-500 h-16 rounded shadow-lg text-white" title="close" >
                        Error, la compra minima permitida es 1
                    <button  onClick={ cerrarAlerta } type="submit">
                        <IoMdCloseCircleOutline />
                    </button>
                    
                    </label>
                </div>  
        </>
    )
}

export default Alert
