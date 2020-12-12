import logo from './../assets/logo.png';

function Nav(){
    return (
        <>
            <div className="container mx-auto">
                <div className="container h-12 mx-auto bg-gray-900 text-gray-400 flex items-center justify-between">
                    <div className="flex justify-start items-center">
                    <svg className="ml-2 fill-current text-gray-400 hover:text-blue-800  xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                    <span className="p-2 hover:text-white transition duration-500 ease-in-out transform hover:-translate hover:scale-105  md:flex lg:flex xl:flex hidden">@mi-tienda</span>
                    <svg className="ml-2 fill-current text-gray-400 hover:text-white  xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/>
                    </svg>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Atencion al cliente</span>
                    </div>
                    <div className="flex justify-end items-center">
                    <svg className="ml-2 fill-current text-gray-400 hover:text-white xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-14.815l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 6.751 0 7.506 7.595 3.64 13.679-1.292 2.031-2.64 3.63-2.64 5.821 0 1.747.696 3.331 1.82 4.5z"/>
                    </svg>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Crear usuario</span>
                    <svg className="ml-2 fill-current text-gray-400 hover:text-white xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                    </svg>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Login</span>
                    <svg className="ml-2 fill-current text-gray-400 hover:text-red-600 xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                    </svg>
                    <span className="p-2 md:flex lg:flex xl:flex hidden">Favoritos</span>
                    <svg className="ml-2 fill-current text-gray-400 hover:text-red-600 xl:hidden lg:hidden md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 451 451"><defs/>
                        <path d="M447 428L337.6 318.4A192.5 192.5 0 00192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0019 0 13.5 13.5 0 000-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0127 192.3z"/>
                    </svg>
                    <svg className="ml-2 mr-2 fill-current text-gray-400 hover:text-white xl:hidden lg:hidden md:hidden" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92"><defs/>
                        <path d="M92 27L81 61c-1 2-3 4-5 4H34c-2 0-4-1-5-4L13 19H4c-2 0-4-2-4-4s2-4 4-4h12c2 0 3 1 4 3l16 43h38l9-27H35c-2 0-4-2-4-4s2-4 4-4h53l3 2 1 3zM36 70l-4 2-2 5 2 4c1 2 3 2 4 2l5-2 2-4-2-5-5-2zm36 0l-4 2-2 5c0 1 0 3 2 4 1 2 3 2 4 2 2 0 4 0 5-2l2-4-2-5-5-2z"/>
                    </svg>
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