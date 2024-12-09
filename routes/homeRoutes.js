// Importo express
const express = require("express");
// Faccio istanza di Router eseguendo il metodo Router() dell'oggetto express
const router = express.Router();
// Importo un file controller
const controller = require("../controllers/homeController");
// Importo un file middleware
const middlewareID = require("../middleware/authMiddleware");

// Definisco endpoint con router
router.get("/", controller.index);
router.get("/:id", middlewareID, controller.show);
router.post("/", controller.store);
router.put("/:id", middlewareID, controller.update);
router.patch("/:id", middlewareID, controller.modify);
router.delete("/:id", middlewareID, controller.destroy);

// Esporto router
module.exports = router;
