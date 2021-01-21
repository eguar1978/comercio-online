import React from 'react'

const eliminarProductoCarrito = () => {

    /*

    AUN NO SE ESTA UTILIZANDO

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
    */
    return (
        <div>
            
        </div>
    )
}

export default eliminarProductoCarrito
