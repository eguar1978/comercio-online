import React from 'react'
import { FaRegCreditCard } from 'react-icons/fa';
import ItemCart from './ItemCart';
import {Store} from '../../../context/store';
import { useContext } from 'react'; 
import {Link} from 'react-router-dom'


const Cart = () => {

    const [data] = useContext(Store);

    const totalWidGets = data.items.map((totWidGetCard, index) => (totWidGetCard.subTotalProducto))

    const totCart = totalWidGets.reduce((a, b) => a + b, 0)

    const iva = (totCart / 100) * 22

    return (
        <>
            <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-blue-200 shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                    <table className="w-full text-sm lg:text-base">
                        <thead>
                        <tr className="h-12 uppercase">
                            <th className="hidden md:table-cell"></th>
                            <th className="text-left">PRODUCTO</th>
                            <th className="lg:text-right text-right pl-5 lg:pl-0">
                                <span className="lg:hidden" title="Quantity">CANT.</span>
                                <span className="hidden lg:inline">CANTIDAD</span>
                            </th>
                            <th className="hidden text-right md:table-cell">
                                <span className="lg:hidden" title="Quantity">PRECIO UNID.</span>
                                <span className="hidden lg:inline">PRECIO UNIDAD</span>    
                            </th>
                            <th className="text-right">TOTAL</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                data.items.map(item => <ItemCart datosItem={item} cantidad={data.cantidadArticulo}/>)
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-6">
                <div className="w-full p-8 text-gray-800 bg-blue-200 shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">detalle de pedido</h1>
                </div>
                    <div className="p-4">
                        <div className="flex justify-between border-b">
                            <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            Subtotal
                            </div>
                            <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            ${totCart.toFixed(2)}
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            Impuestos 22%
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            ${iva.toFixed(2)}
                        </div>
                        </div>
                        <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            Total
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            ${(totCart + iva).toFixed(2)}
                        </div>
                        </div>
                        <div>
                        <Link to="/checkout">      
                            <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                <FaRegCreditCard className="mt-1"/>
                            <span className="ml-2 mt-5px">Procede a pagar</span>
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
