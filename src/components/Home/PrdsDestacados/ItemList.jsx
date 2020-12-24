import {useState, useEffect} from 'react';
import Loading from '../../varios/Loading';
import Item from './Item';


export const ItemList = () => {



    const [items, setitems] = useState([]);

    const products = [
        {
            id          : 1,
            nombre      : 'Reloj',
            descripcion : 'Clasico, dama',
            valor       : '15,50',
            stock       : 4
        },
        {
            id          : 2,
            nombre      : 'Reloj',
            descripcion : 'Clasico, hombre',
            valor       : '15,00',
            stock       : 8
        },
        {
            id          : 3,
            nombre      : 'Reloj',
            descripcion : 'Clasico, niño',
            valor       : '12,50',
            stock       : 6
        },
        {
            id          : 4,
            nombre      : 'Reloj',
            descripcion : 'Clasico, niña',
            valor       : '13,50',
            stock       : 9
        }
    ];

    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        },3000)
    })

    useEffect(() => {
        getProducts.then(rta => setitems(rta))
    },[]);

    useEffect(() => {
        
        items.map(item => console.log(item));

    },[items]);
    


    /* MENEJAR STOCK Y CANTIDAD DE ARTICULOS A AGREGAR AL CARRO */

    return (
        <>

            {
                items.length ? 

                <>
                    <div className="overflow-y-auto bg-blue-200">
                        <div className="px-10 grid grid-cols-4 gap-4">
                            {
                                items.map(item => 
                                
                                    <Item
                                        key={item.id}
                                        descripcion={item.descripcion}
                                        nombre={item.nombre}
                                        valor={item.valor}
                                        stock={item.stock}
                                    />

                                )
                            }

                        </div>
                    </div>
                </> 
            :       
                    <div className="mx-auto w-full overflow-y-auto bg-blue-200">
                        <div className="px-10 grid grid-cols-4 gap-4">
                            <Loading />
                        </div>
                    </div>
            }            

        </>
    );
};

export default ItemList;