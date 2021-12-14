const express = require("express");
const router = express.Router();

// @route       GER api/pages
// @description Test route
// @access      Public
router.get("/", (req, res) => res.send("Pages route"));

module.exports = router;
