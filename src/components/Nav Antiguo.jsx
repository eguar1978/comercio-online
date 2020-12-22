import logo from './../assets/logo.png';
import AddUser from './iconos-svg/AddUser';
import Cart from './iconos-svg/Cart';
import Facebook from './iconos-svg/Facebook';
import Heart from './iconos-svg/Heart';
import Mail from './iconos-svg/Mail';
import Search from './iconos-svg/Search';
import User from './iconos-svg/User';

function Nav(){
    return (
        <>
            <div className="container mx-auto">
                
                <div className="container h-10 mx-auto bg-gray-900 text-gray-400 flex items-center justify-between">
                    <div className="flex justify-start items-center">
                    <Facebook />
                    <span className="p-2 hover:text-white transition duration-500 ease-in-out transform hover:-translate hover:scale-105  md:flex lg:flex xl:flex hidden">@mi-tienda</span>
                    <Mail />
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Atencion al cliente</span>
                    </div>
                    <div className="flex justify-end items-center">
                    <AddUser />
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Crear usuario</span>
                    <User />
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Login</span>
                    <Heart />
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Favoritos</span>
                    <Search className="ml-2 fill-current text-gray-400 hover:text-white  xl:hidden lg:hidden md:hidden" width="24" height="24" />
                    <Cart className="ml-2 fill-current text-gray-400 hover:text-white  xl:hidden lg:hidden md:hidden mr-2" width="32" height="32" />
                    </div>
                </div>

                <div className="container h-8 mx-auto bg-gray-700 text-gray-400 flex items-center justify-center">
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Damas</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Caballero</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niños</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niñas</span>
                </div>

                <div className="container h-32 mx-auto bg-blue-300 text-gray-400 flex items-center justify-between md:flex lg:flex xl:flex hidden">
                    <div className="flex items-center">
                        <img className="p-2 h-24 object-cover" src={logo} alt="Logo"/>
                    </div>
                    <div className="flex items-center p-6">
                    <div className="p-2">
                        <Search width="34" height="34" />
                    </div>
                    <div>
                        <Cart width="48" height="48" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;