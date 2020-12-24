import React from 'react'
import {useEffect, useState} from 'react';
import { SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";
import Loading from '../../varios/Loading';
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {

    const addCarrito = () => {
        alert("Producto agregado ok");
    }

    const [product, setProducts] = useState(null);

    const getProduct = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id: 1,
                marca: "Current",
                nombre: "Reloj Dama",
                foto: "https://picsum.photos/1600/900",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reprehenderit rerum sunt, perspiciatis illo adipisci omnis sit saepe placeat natus dolorem similique quaerat velit voluptate quidem est eius hic? Illo?",
                precio: 27,
                stock: 4
            });
        }, 2000);
    });

    useEffect(() => {
        getProduct.then(rta => setProducts(rta))
    },[]);

    return (
        <>

            {
                product ?
            <>
                <section class="text-gray-700 body-font overflow-hidden bg-white">
                    <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.foto} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{product.marca}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.nombre}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span class="text-gray-600 ml-3">4 Reseñas</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a class="text-gray-500">
                                <SiFacebook />
                            </a>
                            <a class="ml-2 text-gray-500">
                                <SiTwitter />
                            </a>
                            <a class="ml-2 text-gray-500">
                                <SiWhatsapp />
                            </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">{product.descripcion}</p>
                        <div class="flex items-center pb-5 border-b-2 border-gray-200 mb-5">


                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">${product.precio}</span>
                            <div className="flex items-center justify-center pl-3">
                                    <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                                    
                                    <ItemCount stock={product.stock} />
                                    
                                
                                    </div>
                                    <h2 class="text-sm title-font text-gray-500 tracking-widest pl-1">Stock disponible: {product.stock}</h2>
                            </div>
                        </div>
                        <div class="pt-4">
                            <div className="flex items-center justify-center pl-3">
                                    <button onClick={ addCarrito } className="bg-blue-300 hover:bg-blue-500 text-grey-darkest font-bold py-2 px-4 ml-2 rounded">
                                        <span>Agregar</span>
                                    </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>|   
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
