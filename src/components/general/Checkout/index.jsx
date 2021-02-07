import React from 'react'
import {Store} from '../../../context/store';
import { useContext } from 'react'; 
import { useState, useEffect } from 'react'
import { getFirestore } from '../../db'
import firebase from 'firebase/app'

const Checkout = () => {

    const [data, setData] = useContext(Store);
    const [eNombre, seteNombre] = useState('')
    const [eApellido, seteApellido] = useState('')
    const [eEmail, seteEmail] = useState('')
    const [eReEmail, seteReEmail] = useState('')
    const [eValEmail, seteValEmail] = useState('')
    const [eTelefono, seteTelefono] = useState('')
    const [eDireccion, seteDireccion] = useState('')


    


    let precioFinal = 0;

    data.items.map((number) =>  
        precioFinal = precioFinal + number.subTotalProducto 
    );

    precioFinal = (precioFinal * 1.22).toFixed(2)

    const [vendido, completoVenta] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    
    const db = getFirestore();

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        reEmail: '',
        direccion: '',
        telefono: '',
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(handleChangeInput)

    const compra = {
        usuario: formData,
        items: data.items,
        totalPrice: precioFinal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(!formData.nombre.trim()){
            seteNombre("border-4 border-red-600")
            return
        }else{
            seteNombre("border-4 border-green-600")
        }

        if(!formData.apellido.trim()){
            seteApellido("border-4 border-red-600")
            return
        }else{
            seteApellido("border-4 border-green-600")
        }

        if(!formData.email.trim()){
            seteEmail("border-4 border-red-600")
            return
        }else{
            seteEmail("border-4 border-green-600")
        }

        if(!formData.reEmail.trim()){
            seteReEmail("border-4 border-red-600")
            return
        }else{
            seteReEmail("border-4 border-green-600")
        }

        if(formData.email !== formData.reEmail){
            seteValEmail("placeholder-blue-700 bg-red-300")
            return
        }else{
            seteValEmail("text-gray-700 bg-gray-200")
        }

        if(!formData.direccion.trim()){
            seteDireccion("border-4 border-red-600")
            return
        }else{
            seteDireccion("border-4 border-green-600")
        }

        if(!formData.telefono.trim()){
            seteTelefono("border-4 border-red-600")
            return
        }else{
            seteTelefono("border-4 border-green-600")
        }





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
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eNombre}`}
                            id="nombre" name="nombre" type="text" required="" placeholder="Su nombre"
                            value={formData.nombre}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="mt-2">
                        <label className="block text-sm text-gray-00">Apellido</label>
                        <input 
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eApellido}`}
                            id="apellido" name="apellido" type="text" required="" placeholder="Su apellido"
                            value={formData.apellido}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="mt-2">
                        <label className="block text-sm text-gray-600" >E-mail</label>
                        <input 
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eEmail} ${eValEmail}`}
                            id="email" name="email" type="text" required="" placeholder="Su e-mail" 
                            value={formData.email}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="mt-2">
                        <label className="block text-sm text-gray-600" >Repita el E-mail</label>
                        <input 
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eReEmail} ${eValEmail}`}
                            id="email" name="reEmail" type="text" required="" placeholder="Repita su e-mail" 
                            value={formData.reEmail}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="mt-2">
                        <label className=" block text-sm text-gray-600" >Direccion</label>
                        <input 
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eDireccion}`}
                            id="direccion" name="direccion" type="text" required="" placeholder="Su direccion" 
                            value={formData.direccion}
                            onChange={handleChangeInput}
                        />
                        </div>
                        <div className="mt-2">
                        <label className="hidden text-sm block text-gray-600" >Telefono</label>
                        <input 
                            className={`w-full px-5 py-1 text-gray-700 bg-gray-200 rounded ${eTelefono}`}
                            id="telefono" name="telefono" type="text" required="" placeholder="Su telefono" 
                            value={formData.telefono}
                            onChange={handleChangeInput}
                        />
                        </div>

                        <div className="mt-4">
                            <button className="w-full px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">PAGAR $ {precioFinal}</button>
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
