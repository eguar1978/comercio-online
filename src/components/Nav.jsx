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
                <div className="container h-12 mx-auto bg-gray-900 text-gray-400 flex items-center justify-between">
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
                    <Search />
                    <Cart />
                    </div>
                </div>

                <div className="container h-32 mx-auto bg-blue-300 text-gray-400 flex items-center justify-between md:flex lg:flex xl:flex hidden">
                    <div className="flex items-center">
                        <img className="p-2 h-24 object-cover" src={logo} alt="Logo"/>
                    </div>
                    <div className="flex items-center p-6">
                    <div className="p-2">
                        <svg width="48px" height="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="#000" fill-rule="evenodd" d="M19.4 21.4a8.5 8.5 0 112-2L27 25c.6.6.6 1.4 0 2-.6.6-1.4.6-2 0l-5.6-5.6zm-4.9-.4a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="48px" height="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92"><defs/>
                            <path d="M92 27L81 61c-1 2-3 4-5 4H34c-2 0-4-1-5-4L13 19H4c-2 0-4-2-4-4s2-4 4-4h12c2 0 3 1 4 3l16 43h38l9-27H35c-2 0-4-2-4-4s2-4 4-4h53l3 2 1 3zM36 70l-4 2-2 5 2 4c1 2 3 2 4 2l5-2 2-4-2-5-5-2zm36 0l-4 2-2 5c0 1 0 3 2 4 1 2 3 2 4 2 2 0 4 0 5-2l2-4-2-5-5-2z"/>
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;