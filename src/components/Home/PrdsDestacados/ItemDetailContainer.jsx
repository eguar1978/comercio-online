import React from 'react'
import {useEffect, useState} from 'react';

import Loading from '../../varios/Loading';
import ItemDetail from './ItemDetail';
import { listaProductos } from './../../varios/productos'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {

    

    const [producto, setProduct] = useState(null);

    const { itemid } = useParams();

    const getProduct = new Promise((resolve, reject) => {

        setTimeout(() => {
            const productoClickeado = listaProductos.find( producto => producto.id == itemid )
            resolve(productoClickeado);
          }, 500);

    });

    useEffect(() => {
        getProduct.then(rta => setProduct(rta))
    }); // Elimine el array vacio para evitar el mensaje de advertencia

    return (
        <>

            {
                producto ?
            <>
                <ItemDetail product={producto} />
            </>
            :
                <>
                    <Loading /> 
                </>
            }
        </>
    )
}

export default ItemDetailContainer