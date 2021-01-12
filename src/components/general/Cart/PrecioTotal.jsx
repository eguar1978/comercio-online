import React from 'react'
//import {Store} from '../../../context/store';
import {ImporteTotal} from '../../../context/importeTotal'
import { useContext, useEffect } from 'react'; 

const PrecioTotal = ({datosItem}) => {

    const [importeFinal, setImporteFinal] = useContext(ImporteTotal);

    //console.log(datosItem.cantidad);

    useEffect(() => {
        setImporteFinal({
            ...importeFinal,
            sumaImporteTotal: importeFinal.sumaImporteTotal + (datosItem.cantidad * datosItem.precio),
        });
    }, []);
    

    //console.log(importeFinal);

    return (
        <>
            
        </>
    )
}

export default PrecioTotal
