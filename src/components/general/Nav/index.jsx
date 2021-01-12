import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { GoGrabber } from "react-icons/go";
import {Link, useHistory} from 'react-router-dom'
import logo from './../../../assets/logo.png';
import {Store} from '../../../context/store';
import {ShowCart} from '../../../context/showCart'
import { useContext } from 'react';
import WidgetsCart from '../WidgetsCart';

export const Nav = () => {

    const history = useHistory();

    const [data, setData] = useContext(Store);

    const [showCart, setShowCart] = useContext(ShowCart);

    const cerrarCarrito = () => {
        showCart === 'hidden' ? setShowCart('') : setShowCart('hidden');
    }

    return (
        <>
            <div className="mx-auto">

                <div className="h-32 mx-auto bg-blue-300 text-gray-400 flex items-center justify-between md:flex lg:flex xl:flex hidden">
                    <div className="flex items-center">
                        <img className="p-2 h-24 object-cover" src={logo} alt="Logo"/>
                    </div>
                    <div className="flex items-center p-6">
                    <div className="p-2">
                        <FaSearch size="2em" className="text-black"/>
                    </div>
                    <div className="relative" onClick={ () => cerrarCarrito() }>
                        <FaShoppingCart size="2em" className="text-black" />
                        <div className="absolute -top-4 -right-3">
                            
                            {data.cantidad > 0
                            ? 
                                <button  onClick={ () => cerrarCarrito() } className="border-2 border-solid border-red-600 text-red-600 shadow-sm hover:shadow-lg rounded-full font-bold bg-red-300">
                                    <span className="m-2">{data.cantidad}</span>
                                </button>
                            : 
                                <button onClick={ () => cerrarCarrito() }  className="border-2 border-solid border-black text-black shadow-sm hover:shadow-lg rounded-full font-bold bg-red-300">
                                    <span className="m-2">{data.cantidad}</span>
                                </button>
                            }
   
                        </div>
                    </div>
                    </div>
                </div>

                <div className="h-8 mx-auto bg-gray-900 text-gray-400 flex items-center md:justify-center sm:p-2 justify-end ">
                    <span className="p-2 md:flex lg:flex xl:flex hidden"><Link to="/"> Home </Link>
                    </span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden"><Link to="/categoria/dama"> Dama </Link></span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden"><Link to="/categoria/caballero"> Caballero </Link></span>
                    <FaSearch size="1em" className="text-white md:hidden mr-1"/>
                    <div className="relative md:hidden" onClick={ () => cerrarCarrito() }>
                        <FaShoppingCart size="1em" className="text-white md:hidden mr-1"/>
                        <div className="absolute -top-3 -right-2">

                            {data.cantidad > 0
                            ? 
                                <button onClick={ () => cerrarCarrito() } className="border-2 border-solid border-red-600 text-red-600 shadow-sm hover:shadow-lg rounded-full font-bold bg-red-300 text-xs">
                                    <span className="m-1">{data.cantidad}</span>
                                </button>
                            :
                                <button onClick={ () => cerrarCarrito() } className="border-2 border-solid border-black text-black shadow-sm hover:shadow-lg rounded-full font-bold bg-red-300 text-xs">
                                    <span className="m-1">{data.cantidad}</span>
                                </button>
                            }
                        </div>
                    </div>
                    <GoGrabber  size="1.75em" className="text-white md:hidden mr-1"/>
                </div>

            </div>
            <WidgetsCart />
        </>
    );
}

export default Nav;