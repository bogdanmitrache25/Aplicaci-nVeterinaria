// api.js
const agregarMascota = async (nuevaMascota) => {
  try {
    const response = await fetch("http://localhost:5000/agregarMascota", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaMascota),
    });

    const data = await response.json();
    console.log("Mascota agregada:", data);
    return data;
  } catch (error) {
    console.error("Error al agregar mascota:", error);
    throw new Error("Error al agregar mascota");
  }
};

export { agregarMascota };
