import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (
    <main>
        <div className="d-flex justify-content-center m-0 p-0 w-100">
                    <div className="bg-grey border border-shadow m-2 card-size rounded p-2 my-4">
                        <form className="formulario" onSubmit={handleSubmit(enviar)}>
                            <div>
                                <h2 className="fs-3 fw-bold text-center">Contacto</h2>
                            </div>
                            <div className="mb-3 m-2">
                                <label htmlFor="exampleInputEmail1" className="form-label m-0">Nombre:</label>
                                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")}className="form-control border border-dark" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3 m-2">
                                <label htmlFor="exampleInputEmail1" className="form-label m-0">Correo:</label>
                                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")}className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3 m-2">
                                <label htmlFor="exampleInputEmail1" className="form-label m-0">Telefono:</label>
                                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")}className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3 m-2">
                                <label htmlFor="exampleInputEmail1" className="form-label m-0">Comentarios:</label>
                                <div className="form-floating">
                                    <textarea className="form-control border-dark" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea"></label>
                                </div>
                            </div>
                            <div className="mb-3 m-2">
                                <div className="form-check d-flex justify-content-center m-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label ms-1" for="flexCheckDefault">
                                        He leído y acepto los términos y condiciones de uso
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3 m-2">
                                <div className="row d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary btn-violet border border-white text-white bg-black w-auto me-1">Enviar</button>
                                    <button type="reset" className="btn btn-primary btn-violet border border-white text-white bg-black w-auto ms-1">Limpiar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    </main>
    
  )
}

export default Contacto;