const express = require("express");
const router = express.Router();

const propertyController = require("../controllers/propertyController")

router.get("/api/properties", propertyController.getAllProperty)
router.get("/api/properties/:id", propertyController.getSingleProperty)

module.exports = router