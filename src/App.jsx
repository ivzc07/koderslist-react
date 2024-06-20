import { useState } from 'react'
import clsx from 'clsx';
import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const [names, setNames] = useState([]);
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted }, reset } = useForm();

  function removeFromList(indexToRemove) {
    const newData = names.filter((items, i) => i !== indexToRemove);
    setNames(newData);
  }

  function onSubmit(data) {
    setNames([...names, { name : data.name, lastName: data.lastName, email: data.email}]);
    reset();
  }



  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <p className="w-full bg-teal-500 text-black font-bold text-center p-2">
        Koders List Hook Form
      </p>
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Ingresa nombre"
          className={clsx("p-2 rounded text-white w-full max-w-screen-sm", { "border-2 border-red-500 bg-red-300": errors.todo })}
          required
          {...register('name', {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 25, message: "Máximo 180 caracteres (Mucho texto)" },
          })}
        />
        <input
          type="text"
          placeholder="Ingresa Apellido"
          className={clsx("p-2 rounded text-white w-full max-w-screen-sm", { "border-2 border-red-500 bg-red-300": errors.todo })}
          required
          {...register('lastName', {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 25, message: "Máximo 50 caracteres (Mucho texto)" },
          })}
        />
        <input
          type="text"
          placeholder="Ingresa Email"
          className={clsx("p-2 rounded text-white w-full max-w-screen-sm", { "border-2 border-red-500 bg-red-300": errors.todo })}
          required
          {...register('email', {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 50, message: "Máximo  caracteres" },
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message: "Correo Invalido"}
          })}
        />
        <button
          className={"text-black px-3 rounded bg-white disabled:bg-stone-400"}
          disabled={isSubmitted ? !isValid : false}
        >
          + Agregar
        </button>
      </form>

      {errors.todo && (
        <p className="text-red-500 text-center text-sm font-bold-sm">
          {errors.todo.message}
        </p>
      )}

      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-3">
        {names.length === 0 && <p className="text-white/50"> No hay koders🙅‍♂️</p>}
        {names.map((names, i) => {
          return (
          <div className='flex flex-row gap-2
          ' key={`data-${i}`}>
            <div className="bg-white/10 rounded p-4 flex flex-row justify-between select-none gap-2">
              <span>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17.6841C4 17.0485 4 16.7306 4.04798 16.4656C4.27087 15.2344 5.23442 14.2709 6.46558 14.048C6.5425 14.0341 6.6237 14.0242 6.71575 14.0172C6.94079 14 7.05331 13.9914 7.20361 14.0026C7.35983 14.0143 7.4472 14.0297 7.59797 14.0722C7.74302 14.1131 8.00429 14.2315 8.52682 14.4682C8.83795 14.6091 9.16326 14.7243 9.5 14.811M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM16.4976 16.2119C15.7978 15.4328 14.6309 15.2232 13.7541 15.9367C12.8774 16.6501 12.7539 17.843 13.4425 18.6868C13.8312 19.1632 14.7548 19.9983 15.4854 20.6353C15.8319 20.9374 16.0051 21.0885 16.2147 21.1503C16.3934 21.203 16.6018 21.203 16.7805 21.1503C16.9901 21.0885 17.1633 20.9374 17.5098 20.6353C18.2404 19.9983 19.164 19.1632 19.5527 18.6868C20.2413 17.843 20.1329 16.6426 19.2411 15.9367C18.3492 15.2307 17.1974 15.4328 16.4976 16.2119Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </span>
              <span className="select-none">{ names.name + " " + names.lastName} </span>
              
            </div>

            <div className="bg-white/10 rounded p-4 flex flex-row justify-between select-none items-center gap-2">
              <span>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ededed"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
              </span>
              <span className="select-none">{ names.email} </span>
            </div>

            <div className="bg-white/10 rounded p-4 flex flex-row justify-between select-none">
            <span
                className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex"
                onClick={() => removeFromList(i)}
              >
                x
              </span>
            </div>
            
          </div> 
          );
        })}
      </div>
    </main>
  );
  

}

export default App
