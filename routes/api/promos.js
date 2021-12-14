const express = require("express");
const router = express.Router();

// @route       GER api/promos
// @description Test route
// @access      Public
router.get("/", (req, res) => res.send("Promos route"));

module.exports = router;
