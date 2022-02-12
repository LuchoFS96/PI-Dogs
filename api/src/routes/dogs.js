const { Router, response } = require("express");
const { Race, Temperament } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res, next) => {
  //     Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  //     Si no existe ninguna raza de perro mostrar un mensaje adecuado
  //    GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}
  let { name } = req.query;
  let breedsDB, breedsApi;
  if (name) {
    breedsDB = await Race.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
      },
    });
    breedsApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );
  } else {
    breedsDB = await Race.findAll();
    breedsApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  }
  let filteredBreeds = breedsApi.data.map((breed) => {
    return {
      id: breed.id,
      name: breed.name,
      height: breed.height,
      weight: breed.weight,
      life_span: breed.life_span,
    };
  });
  let allBreeds = [...breedsDB, ...filteredBreeds];
  res.send(allBreeds);
});

router.get("/:id", async (req, res, next) => {
  // Obtener el detalle de una raza de perro en particular
  // Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  // Incluir los temperamentos asociados
  let { id } = req.params;
  let breedsDB = await Race.findAll();
  let breedsApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  let filteredBreeds = breedsApi.data.map((breed) => {
    return {
      id: breed.id,
      name: breed.name,
      height: breed.height,
      weight: breed.weight,
      life_span: breed.life_span,
      temperament: breed.temperament,
    };
  });
  let allBreeds = [...breedsDB, ...filteredBreeds];
  let finalBreed = {};
  allBreeds.forEach((breed) => {
    if (breed.id == id) {
      finalBreed = breed;
    }
  });
  if (Object.keys(finalBreed).length === 0) {
    res.send("no existe en la db");
  } else {
    res.send(finalBreed);
  }
});

router.post("/", (req, res, next) => {
  res.send("Soy un post de dogs");
});
router.put("/", (req, res, next) => {
  res.send("Soy un put de dogs");
});
router.delete("/", (req, res, next) => {
  res.send("Soy un delete de dogs");
});

module.exports = router;
