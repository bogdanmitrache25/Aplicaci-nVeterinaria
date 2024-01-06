import React, { useState, useEffect } from "react";

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [errorNombreMascota, setErrorNombreMascota] = useState(false);
  const [errorNombrePropietario, setErrorNombrePropietario] = useState(false);
  const [error, setError] = useState(false);
  const [errorFecha, setErrorFecha] = useState(false); // Nuevo estado para validar fecha

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const nombreValido = /^[A-Za-z\s]+$/; // Expresión regular para aceptar solo letras y espacios

    if (![nombre, propietario, email, alta, sintomas].every(Boolean)) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    if (!nombreValido.test(nombre)) {
      setErrorNombreMascota(true);
      return;
    } else {
      setErrorNombreMascota(false);
    }

    if (!nombreValido.test(propietario)) {
      setErrorNombrePropietario(true);
      return;
    } else {
      setErrorNombrePropietario(false);
    }

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  const handleFechaChange = (evento) => {
    const fechaSeleccionada = evento.target.value;
    const fechaActual = new Date().toISOString().split("T")[0];

    if (fechaSeleccionada > fechaActual) {
      setErrorFecha(true);
      setAlta("");
    } else {
      setErrorFecha(false);
      setAlta(fechaSeleccionada);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-green-600 font-bold transition duration-300 ease-in-out hover:text-blue-500 ">
          Adminístralos
        </span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow md rounded lg py-10 px-5 mb-10"
      >
        {error && (
          <p className="text-red-500 text-sm ">
            Todos los campos son obligatorios
          </p>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
          {errorNombreMascota && (
            <p className="text-red-500 text-sm">
              Solo puedes introducir letras en el nombre de la mascota
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(evento) => setPropietario(evento.target.value)}
          />
          {errorNombrePropietario && (
            <p className="text-red-500 text-sm">
              Solo puedes introducir letras en el nombre del propietario
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={handleFechaChange}
          />
          {errorFecha && (
            <p className="text-red-500 text-sm">
              La fecha de alta no puede ser posterior al día de hoy.
            </p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="síntomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(evento) => setSintomas(evento.target.value)}
            placeholder="Describe los síntomas"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-all "
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};
