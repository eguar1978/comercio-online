import {useState, useEffect} from 'react';
import Loading from '../../varios/Loading';
import { listaProductos } from '../../varios/productos'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const { categoria } = useParams();
    console.log(categoria);
  
    const promesaProductos = new Promise((resolve, reject) => {
      setTimeout(() => resolve(listaProductos), 500);
    });
  
    const llamadoProductos = () => {
      promesaProductos.then((respuesta) => {
        if (categoria) {
          const productosPorCategoria = respuesta.filter(
            (producto) => producto.categoria === categoria
          );
          setProductos(productosPorCategoria);
        } else {
          setProductos(respuesta);
        }
      });
    };

    useEffect(() => llamadoProductos(), [categoria]);

    /* MENEJAR STOCK Y CANTIDAD DE ARTICULOS A AGREGAR AL CARRO */

    return (
            productos.length > 0 ? (
              <ItemList key={productos.id} productos={productos} />
            ) : (
              <Loading />
            )
    )

}

export default ItemListContainer;