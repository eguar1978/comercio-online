import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { GoGrabber } from "react-icons/go";
import logo from './../../../assets/logo.png';


function Nav(){
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
                    <div>
                        <FaShoppingCart size="2em" className="text-black" />
                    </div>
                    </div>
                </div>

                <div className="h-8 mx-auto bg-gray-900 text-gray-400 flex items-center md:justify-center sm:p-2 justify-end ">
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Damas</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Caballero</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niños</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niñas</span>
                    <FaSearch size="1em" className="text-white md:hidden mr-1"/>
                    <FaShoppingCart size="1em" className="text-white md:hidden mr-1"/>
                    <GoGrabber  size="1.75em" className="text-white md:hidden mr-1"/>
                </div>

            </div>
        </>
    );
}

export default Nav;