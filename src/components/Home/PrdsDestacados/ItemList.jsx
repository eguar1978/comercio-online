import React from 'react'
import Item from './Item';

const ItemList = (props) => {

    return (

        <Item id={props.productos.id} producto={props.productos.data} />

    )
}
export default ItemList