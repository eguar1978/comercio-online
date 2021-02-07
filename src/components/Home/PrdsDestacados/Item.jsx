import {Link, withRouter} from 'react-router-dom'

const Item = ({id, producto}) =>{
    
    return (
        <>
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src={producto.thumbnail}
                            className="h-80 rounded-md"
                            alt={producto.nombre}
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                        <div className="py-5 px-5">
                            <span className="font-bold text-gray-800 text-lg">{producto.nombre}</span>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600 font-light">
                                    {producto.descripcion}
                                </div>
                                <div className="text-2xl text-red-600 font-bold">
                                    ${producto.precio}
                                </div>
                            </div>
                            <hr className="mt-2 border-solid border-2 border-blue-300"/>
                            <div className="flex items-center justify-center mt-2">
                                <div className="text-sm text-gray-900 font-light">
                                    Stock disponible: {producto.stock}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="uppercase px-2 py-1 rounded bg-blue-300 text-blue-900 max-w-max shadow-sm hover:shadow-lg mt-1">
                                        <Link to={`/item/${id}`}>  Ver más </Link>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
};

export default withRouter(Item);