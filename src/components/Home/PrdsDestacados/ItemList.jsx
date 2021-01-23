import React from 'react'
import Item from './Item';

const ItemList = (props) => {


    return (

        <> 

            <div className="overflow-y-auto bg-blue-200">
                <div className="px-10 grid grid-cols-4 gap-4">
            {
                props.productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))
            }
                </div>
            </div>

        </>
    )
}
export default ItemList