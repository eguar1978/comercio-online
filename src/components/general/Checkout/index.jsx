import React from 'react'
import { useState } from 'react'

const Checkout = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const compra = {
        user: formData,
        //items: data.items,
        //totalPrice: data.precioTotal,
        //date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {

        /*
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
        */
    }

    return (
        <>
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
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="apellido" name="apellido" type="text" required="" placeholder="Su apellido" />
                    </div>
                    <div className="mt-2">
                    <label className="block text-sm text-gray-600" >E-mail</label>
                    <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="email" name="email" type="text" required="" placeholder="Su e-mail" />
                    </div>
                    <div className="mt-2">
                    <label className=" block text-sm text-gray-600" >Direccion</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="direccion" name="direccion" type="text" required="" placeholder="Su direccion" />
                    </div>
                    <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" >Telefono</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="ciudad" name="ciudad" type="text" required="" placeholder="Su ciudad" />
                    </div>

                    <div className="mt-4">
                        <button className="w-full px-4 py-2 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">AQUI VA EL IMPORTE</button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Checkout
