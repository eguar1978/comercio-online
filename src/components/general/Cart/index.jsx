import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import ItemCart from './ItemCart';

const Cart = () => {
    return (
        <>

            <div className="absolute top-0 right-0 ">
                <div className="flex flex-row-reverse flex-col bg-gray-500 bg-opacity-95 w-64 h-screen px-4 tex-gray-900 border border-purple-900 ">
                    <div className="absolute top-0 left-0 ml-2 mt-1 mr-2 overflow-y-auto h-full ">
                        <button className="bg-red-100 inline-block text-center text-red-600 transition rounded-full shadow hover:shadow-lg hover:bg-red-300 hover:text-red-900 focus:outline-none waves-effect">
                            <IoMdCloseCircle />
                        </button>
                        <div className="absolute top-0 right-0 ">
                            Nombre Cliente
                        </div>
                        
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />


                        <div className="flex justify-center pt-2 pb-3 font-bold">
                            <span>
                                TOTAL COMPRA $1245,15
                            </span>
                        </div>
                        <div className="flex justify-center pb-6">
                            <button className="w-24 bg-red-700 p-2 inline-block text-center text-black transition rounded shadow hover:shadow-lg hover:text-white focus:outline-none waves-effect">
                                FINALIZAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>  

        </>
    )
}

export default Cart
