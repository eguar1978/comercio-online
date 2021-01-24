import React from 'react'
import {Store} from '../../../context/store';
import { useContext } from 'react'; 

const ItemCart = ({datosItem}) => {

    const [data, setData] = useContext(Store);

    

    const eliminarProducto = (productId) => {

        const nuevoListado = data.items.filter( carroActual => carroActual.id !== productId )

        setData({
            data,
            cantidad: data.cantidad,
            items: nuevoListado,                
        })

        const eliminarCantidad = data.items.filter( carroActual => carroActual.id === productId )

        const restaCantidad = eliminarCantidad.map((prodEliminar, index) => (prodEliminar.cantidad))

        setData({
            data,
            cantidad: data.cantidad - restaCantidad,
            items: nuevoListado,                
        })

    }

    return (
        <>

            <tr>
                <td className="hidden pb-4 md:table-cell">
                    <img src={datosItem.imagen} alt={`Imagen de Articulo ${datosItem.nombre}`} className="w-40 rounded" />
                </td>
                <td>
                    <p className="mb-2 md:ml-4">{datosItem.nombre}</p>
                    <form action="" method="POST">
                    <button  onClick={ () => eliminarProducto(datosItem.id) } type="submit" className="text-gray-700 md:ml-4">
                        <small>(Quitar item)</small>
                    </button>
                    </form>
                </td>
                <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    {datosItem.cantidad}
                </span>
                </td>
                <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    ${datosItem.precio.toFixed(2)}
                </span>
                </td>
                <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    ${(datosItem.cantidad * datosItem.precio).toFixed(2)}
                </span>
                </td>
            </tr> 
        </>
    )
}

export default ItemCart
