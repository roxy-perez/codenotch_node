const express = require('express');
const proController = require('../controllers/professional.controller')
const router = express.Router();

router.get("/", proController.getStart);
router.get("/professional", proController.getProfessional);
router.post("/professional", proController.createProfessional);
router.put("/professional", proController.updateProfessional);
router.delete("/professional", proController.deleteProfessional);

module.exports = router;