import React from 'react';
import {useState, useContext, useEffect } from 'react';
import { SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";
import { FaRegStar, FaStar } from "react-icons/fa";
import ItemCount from './ItemCount';
import { withRouter } from 'react-router-dom';
import {Store} from '../../../context/store'
import AlertStock from '../../varios/AlertStock';
import {useParams} from 'react-router-dom'
import Alert from '../../varios/Alert';


const ItemDetail = ({ product }) => {

    const [data, setData] = useContext(Store);
    const [cant, setCant] = useState(1);
    const [alertaStock, setAlertaStock] = useState(0)
    const [alertaSinStock, setMonstrarAlerta] = useState(false)
    const [alertaCompraMinima, setAlertaCompraMinima] = useState(false)
    const { itemid } = useParams();
    

    const cantidadSeleccionada = {cantidad: cant}
    const subTotalPorProducto = {subTotalProducto: product.precio * cant}
    const id = {id: itemid};

    const addCarrito = () => {
   
            const item = data.items.find( item => itemid === item.id )
                    if(item){
                        if(item.stock >= (item.cantidad + cant)){
                            item.cantidad = item.cantidad + cant
                            item.subTotalProducto = item.cantidad * item.precio;
                            setData({
                                ...data,
                                    cantidad: data.cantidad + cant,
                                    items: [...data.items,],
                            })
                        }else{
                            setAlertaStock(item.cantidad + cant)
                            setMonstrarAlerta(false)
                        }
                        
                        
                    }else{
                        const productos = Object.assign(product, cantidadSeleccionada, subTotalPorProducto, id)
                        if(productos.stock >= cantidadSeleccionada.cantidad){
                            setData({
                                ...data, 
                                cantidad: data.cantidad + cant,
                                items: [...data.items, productos],
                            })
                        }else{

                            setAlertaStock(alertaStock + cant)
                            setMonstrarAlerta(false)
                        }

                    }
    }
  

    useEffect(() => {
        alertaStock > 0 ? setMonstrarAlerta(true) : setMonstrarAlerta(false)
    },[alertaStock]);
    
    const sumaCarrito = () => {
        setCant(cant + 1);
    }

    const restaCarrito = () => {
        cant > 1 ? setCant(cant - 1) : setAlertaCompraMinima(true) ;
    }

    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={product.nombre} className="lg:w-1/2 object-cover object-center rounded border border-gray-200 bg-white" src={product.imagen} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.nombre}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.nombre}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <FaStar className="w-4 h-4 text-red-500"/>
                                <FaStar className="w-4 h-4 text-red-500"/>
                                <FaStar className="w-4 h-4 text-red-500"/>
                                <FaStar className="w-4 h-4 text-red-500"/>
                                <FaRegStar className="w-4 h-4 text-red-500" />
                            <span className="text-gray-600 ml-3">4 Reseñas</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <span className="text-gray-500">
                                <SiFacebook />
                            </span>
                            <span className="ml-2 text-gray-500">
                                <SiTwitter />
                            </span>
                            <span className="ml-2 text-gray-500">
                                <SiWhatsapp />
                            </span>
                            </span>
                        </div>
                        <p className="leading-relaxed">{product.descripcion}</p>
                        <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5">


                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.precio}</span>
                            <div className="flex items-center justify-center pl-3">
                                    <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                                    
                                    <ItemCount sumaCarrito={sumaCarrito} restaCarrito={restaCarrito} cant={cant}/>
                                    
                                
                                    </div>
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest pl-1">Stock disponible: {product.stock}</h2>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center justify-center pl-3">
                                    <button onClick={ addCarrito } className="bg-blue-300 hover:bg-blue-500 text-grey-darkest font-bold py-2 px-4 ml-2 rounded">
                                        <span>Agregar</span>
                                    </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                        {
                            alertaSinStock && <AlertStock stock={product.stock} cantidadSeleccionada={alertaStock}/>
                        }    
                        {
                            alertaCompraMinima && <Alert />
                        } 

        </>
    )
}

export default withRouter(ItemDetail)
