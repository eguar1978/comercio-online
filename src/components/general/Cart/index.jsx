import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import ItemCart from './ItemCart';
import {Store} from '../../../context/store';
import { ShowCart } from "../../../context/showCart";
import { useContext } from 'react';


const Cart = () => {


    const [showCart, setShowCart] = useContext(ShowCart);

    const cerrarCarrito = () => {
        showCart === 'hidden' ? setShowCart('') : setShowCart('hidden');
    }

    const [data, setData] = useContext(Store);

    return (
        <>

            <div id="divCart" className={`absolute top-0 right-0 ${showCart} ${data.cantidad === 0 ? 'hidden' : ''} `} >
                <div className="flex flex-row-reverse bg-gray-500 bg-opacity-95 w-64 h-screen px-4 tex-gray-900 border border-purple-900 ">
                    <div className="absolute top-0 left-0 ml-2 mt-1 mr-2 overflow-y-auto h-full ">
                        <button onClick={ () => cerrarCarrito() } className="bg-red-100 inline-block text-center text-red-600 transition rounded-full shadow hover:shadow-lg hover:bg-red-300 hover:text-red-900 focus:outline-none waves-effect">
                            <IoMdCloseCircle />
                        </button>
                        <div className="absolute top-0 right-0 ">
                            Nombre Cliente
                        </div>
                        
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
