// Importo express
const express = require("express");
// Faccio istanza di Router eseguendo il metodo Router() dell'oggetto express
const router = express.Router();
// Importo un file controller
const controller = require("../controllers/homeController");

// Definisco endpoint con router
router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.patch("/:id", controller.modify);
router.delete("/:id", controller.destroy);

// Esporto router
module.exports = router;
