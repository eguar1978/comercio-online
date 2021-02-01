import {useState, useEffect} from 'react';
import Loading from '../../varios/Loading';
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';
import { getFirestore } from '../../db'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const db = getFirestore();

    const { categoria } = useParams();


  /* TRAE EL TOTAL DE PRODUCTOS O DISCRIMINADO POR CATEGORIA */

  const llamadoProductos = () => {

    let llamadoFirebase = db.collection('products')

    if(categoria){ llamadoFirebase = db.collection('products').where("categoria", "==", categoria) }
  
      llamadoFirebase.get().then(docs => {
        let arr = [];
        docs.forEach(doc => {
          //arr.push({id: doc.id, data: doc.data()})
          arr.push(doc.data())
        })
          setProductos(arr);
        })
        .catch(e => console.log(e) );
  }
  

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