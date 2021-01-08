import React from 'react'

const ItemCount = ({cant, sumaCarrito, restaCarrito}) => {

    
    return (
        <>
         <button onClick={ restaCarrito }
            className="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
            <span className="m-auto">-</span>
         </button>
         <input type="hidden" className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readOnly name="custom-input-number" />
         <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
            <span>{ cant }</span>
         </div>
         <button onClick={sumaCarrito} 
            className="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
            <span className="m-auto">+</span>
         </button >   
        </>
    )
}

export default ItemCount
