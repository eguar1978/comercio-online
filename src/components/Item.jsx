import ButtonCart from "./varios/ButtonCart"

const Item = ({nombre, descripcion, valor, stock, action}) =>{
    
    return (
        <>
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            className="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                        <div className="py-5 px-5 ">
                            <span className="font-bold text-gray-800 text-lg">{nombre}</span>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600 font-light">
                                    {descripcion}
                                </div>
                                <div className="text-2xl text-red-600 font-bold">
                                    ${valor}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                                
                                <ButtonCart
                                    stock={stock}
                                />
                               
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div div className="text-sm text-gray-900 font-light">
                                    Stock disponible: {stock}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button onClick={action} class="bg-blue-300 hover:bg-blue-500 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default Item;