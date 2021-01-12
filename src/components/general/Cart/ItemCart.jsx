import React from 'react'

const ItemCart = ({datosItem}) => {


    return (
        <>

            <tr>
                <td className="hidden pb-4 md:table-cell">
                <a href="#">
                    <img src={datosItem.imagen} alt={`Imagen de Articulo ${datosItem.nombre}`} className="w-40 rounded" />
                </a>
                </td>
                <td>
                <a href="#">
                    <p className="mb-2 md:ml-4">{datosItem.nombre}</p>
                    <form action="" method="POST">
                    <button type="submit" className="text-gray-700 md:ml-4">
                        <small>(Quitar item)</small>
                    </button>
                    </form>
                </a>
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
