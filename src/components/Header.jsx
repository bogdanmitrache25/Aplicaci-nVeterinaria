import React from "react";

export const Header = () => {
  return (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto ">
      Seguimiento Pacientes {""}
      <span className="text-green-600 transition duration-300 ease-in-out hover:text-blue-500">
        Veterinaria
        <span role="img" aria-label="Animal emoji">
          {" "}
          🐾
        </span>
      </span>
    </h1>
  );
};
