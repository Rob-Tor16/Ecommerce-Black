import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartcontext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import Swal from "sweetalert2";


export const CheckOut = () => {

    const {cart, clearCart, total} = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total()
        }

        console.log(pedido);

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, pedido)
            .then((doc) => {

                clearCart();


                Swal.fire({
                    title: "¡Muchas gracias por tu compra!",
                    text: `Tu número de pedido es: ${doc.id}`,
                    icon: "success",
                    confirmButtonText: "Ok"
                });
            })
            .catch((error) => {
                console.error("Error al agregar el pedido:", error);

                Swal.fire({
                    title: "Error",
                    text: "Hubo un error al procesar tu pedido. Por favor, inténtalo de nuevo.",
                    icon: "error",
                    confirmButtonText: "Ok"
                });
            });
    }

  return (
    <main >
        <div className="d-flex justify-content-center m-0 p-10 w-100">
            <div className="bg-grey border border-shadow m-2 card-size rounded p-5 my-4">
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div>
                        <h2 className="fs-3 fw-bold text-center">Orden de compra</h2>
                    </div>
                    <div className="mb-3 m-2">
                        <label  className="form-label m-0">Nombre:</label>
                        <input type="text" className="form-control"{...register("nombre")}  />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Correo:</label>
                        <input type="email"  className="form-control"{...register("email")} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Telefono:</label>
                        <input type="phone"  className="form-control"{...register("telefono")} />
                    </div>
                    <div className="mb-3 m-2">
                        <div className="row d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-black border border-white text-white bg-black w-auto me-1">Crear Orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
    
  )
}

export default CheckOut;