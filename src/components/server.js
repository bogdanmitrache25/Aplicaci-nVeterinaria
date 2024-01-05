const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/Bogdan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Esquema para tu colección de mascotas
const mascotaSchema = new mongoose.Schema({
  nombre: String,
  // Otros campos de la mascota
});

// Modelo basado en el esquema
const Mascota = mongoose.model("Mascota", mascotaSchema);

// Ruta para agregar una mascota a la base de datos
app.post("/agregarMascota", async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();
    res.status(201).json(nuevaMascota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
