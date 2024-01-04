import { useEffect } from "react";

export const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
  //Para hacer el código más fácil en vez de poner paciente.nombre, declaro la variable.

  const { nombre, propietario, email, alta, sintomas, id } = paciente;
  const handleEliminar = () => {
    const respuesta = confirm("Quieres eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb3 text-gray-700 uppercase mb-3">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb3 text-gray-700 uppercase mb-3">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb3 text-gray-700 uppercase mb-3">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb3 text-gray-700 uppercase mb-3">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb3 text-gray-700 uppercase mb-3">
        Síntomas: {""}
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
