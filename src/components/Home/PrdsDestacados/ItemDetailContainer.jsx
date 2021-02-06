import React from 'react'
import {useEffect, useState} from 'react';
import { getFirestore } from '../../db'
import Loading from '../../varios/Loading';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null);
    const { itemid } = useParams(); 
    const db = getFirestore();

    let docRef = db.collection("products").doc(itemid);

    useEffect(() => {
        docRef.get().then(function(doc) {
            if (doc.exists) {
                setProduct(doc.data())
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }, []); 

    return (
        <>

            {
                producto ?
            <>
                <ItemDetail itemid={itemid} product={producto} />
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