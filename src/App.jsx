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
            <div className="bg-white/10 rounded p-4 flex flex-row justify-between select-none">
              <span className="select-none">{ names.name + " " + names.lastName} </span>
              
            </div>

            <div className="bg-white/10 rounded p-4 flex flex-row justify-between select-none">
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
