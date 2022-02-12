const { Router } = require("express");
const { Race } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  res.send("Soy un get de dog");
});
router.post("/", async (req, res, next) => {
  // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  // Crea una raza de perro en la base de datos
  let { name, height, weight, life_span } = req.body;
  const newBreed = await Race.create({
    name,
    height,
    weight,
    life_span,
  });
  res.send(newBreed);
});
router.put("/", (req, res, next) => {
  res.send("Soy un put de dog");
});
router.delete("/", (req, res, next) => {
  res.send("Soy un delete de dog");
});

module.exports = router;
