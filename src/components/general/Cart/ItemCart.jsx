import React from 'react'

const ItemCart = () => {
    return (
        <>
            <div className="border-b-2 pt-2">
                <ul>
                    <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-400  hover:font-bold rounded rounded-lg">
                        <span>
                            <img className="rounded" src="https://cdn.shopify.com/s/files/1/0368/1242/3307/products/8216_900x.jpg?v=1588987578" alt="descripcion" srcset=""/>
                        </span>
                        <span>
                            <ul className="ml-2">
                                <li className="mb-1 text-white shadow">CANT. 12</li>
                                <li className="mb-1 text-white shadow">TOTAL </li>
                                <li className="mb-1 text-white shadow">$45,45</li>
                                <li className="pt-1">
                                    <button className="bg-red-700 p-2 inline-block text-center text-black transition rounded shadow hover:shadow-lg hover:text-white focus:outline-none waves-effect">
                                        QUITAR
                                    </button>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ItemCart
