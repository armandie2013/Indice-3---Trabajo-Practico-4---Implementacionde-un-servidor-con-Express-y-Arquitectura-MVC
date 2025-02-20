import express from "express";
import {
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroePorIdController,
  obtenerSuperheroesMayoresDe30Controller,
} from "./controllers/superheroescontroller.mjs";

const app = express();
const PORT = 3005;

// BUSCA POR ID //
app.get("/superheroes/id/:id", obtenerSuperheroePorIdController);

// BUSCA POR ATRIBUTO //
app.get("/superheroes/atributo/:atributo/:valor", buscarSuperheroesPorAtributoController);

// BUSCA POR EDAD //
app.get("/superheroes/edad/mayorA30", obtenerSuperheroesMayoresDe30Controller);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
