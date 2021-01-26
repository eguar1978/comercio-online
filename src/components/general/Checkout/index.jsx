import React from 'react'
import {Store} from '../../../context/store';
import { ImporteTotal } from '../../../context/importeTotal'
import { useContext } from 'react'; 
import { useState } from 'react'
import { getFirestore } from '../../db'
import firebase from 'firebase/app'

const Checkout = () => {

    const [data, setData] = useContext(Store);
    const [ImporteFinal] = useContext(ImporteTotal);
    const [vendido, completoVenta] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    
    const db = getFirestore();
    //const app = getFirebase();

    //console.log(data)
    //console.log(ImporteFinal)
    //console.log(formData);
    //console.log(firebase.firestore.Timestamp.fromDate(new Date()))

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        telefono: '',
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    
    const compra = {
        usuario: formData,
        items: data.items,
        totalPrice: ImporteFinal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            
            //SETEO EL ID DE LA COMPRA
            setIdCompra(id)
            // VACIO EL CARRO
            setData({
                data,
                cantidad: 0,
                items: [],
            })
            // VALIDO LA COMPRA
            completoVenta(true)
        })
        .catch(error => console.log(error))
    }

    return (
        <>

        {
            !vendido ?

            <div className="overflow-y-auto bg-blue-200">
                <div className="leading-loose flex justify-center my-6 ">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl w-3/4" onSubmit={handleSubmitForm}>
                    <p className="text-gray-800 font-medium">Informacion del cliente</p>
                    <div className="">
                    <label className="block text-sm text-gray-00">Nombre</label>
                    <input 
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="nombre" name="nombre" type="text" required="" placeholder="Su nombre"
                        value={formData.nombre}
                        onChange={handleChangeInput}
                    />
                    </div>
                    <div className="mt-2">
                    <label className="block text-sm text-gray-00">Apellido</label>
                    <input 
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="apellido" name="apellido" type="text" required="" placeholder="Su apellido"
                        value={formData.apellido}
                        onChange={handleChangeInput}
                    />
                    </div>
                    <div className="mt-2">
                    <label className="block text-sm text-gray-600" >E-mail</label>
                    <input 
                        className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" 
                        id="email" name="email" type="text" required="" placeholder="Su e-mail" 
                        value={formData.email}
                        onChange={handleChangeInput}
                    />
                    </div>
                    <div className="mt-2">
                    <label className=" block text-sm text-gray-600" >Direccion</label>
                    <input 
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                        id="direccion" name="direccion" type="text" required="" placeholder="Su direccion" 
                        value={formData.direccion}
                        onChange={handleChangeInput}
                    />
                    </div>
                    <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" >Telefono</label>
                    <input 
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
                        id="telefono" name="telefono" type="text" required="" placeholder="Su ciudad" 
                        value={formData.telefono}
                        onChange={handleChangeInput}
                    />
                    </div>

                    <div className="mt-4">
                        <button className="w-full px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">PAGAR $ {ImporteFinal}</button>
                    </div>
                </form>
                </div>
            </div>

            :

            <div className="overflow-y-auto bg-blue-200">
            <div className="leading-loose flex justify-center my-6 ">
            
                <div className="mt-4">
                    <div className="w-full px-4 py-2 text-black font-light bg-green-300 rounded" type="submit">Compra exitosa, este es el numero de seguimiento:  {idCompra}</div>
                </div>
                </div>
            </div>
        }
        </>
    )
}

export default Checkout
