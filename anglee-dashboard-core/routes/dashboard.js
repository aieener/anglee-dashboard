const path = require("path");
const express = require("express");
const router = express.Router();

// test route
router.get("/test", (req, res) => {
  res.send({ express: "Express backend is connected to REACT" });
});

module.exports = router;
