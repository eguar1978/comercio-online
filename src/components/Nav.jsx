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

                <div className="container h-8 mx-auto bg-gray-900 text-gray-400 flex items-center justify-center">
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Damas</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Caballero</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niños</span>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Niñas</span>
                </div>

            </div>
        </>
    );
}

export default Nav;