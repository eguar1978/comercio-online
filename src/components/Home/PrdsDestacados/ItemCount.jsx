import React, { useState} from 'react'

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1); 
    
    return (
        <>
         <button onClick={ () => { count > 1 ? setCount(count - 1) : alert("El minimo de compra es 1") } }
            className="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
            <span className="m-auto">-</span>
         </button>
         <input type="hidden" className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readOnly name="custom-input-number" />
         <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
            <span>{ count }</span>
         </div>
         <button onClick={ () => { count < stock ? setCount(count + 1) : alert("No hay stock suficiente") } } 
            className="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
            <span className="m-auto">+</span>
         </button >   
        </>
    )
}

export default ItemCount
