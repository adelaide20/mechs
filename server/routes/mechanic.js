const express = require("express")
const router = express.Router()

const { profile, allMechs } = require("../controller/mechanic_profile");

// 1. create mechanic profile
router.post("/create", profile);

// 2. get all mechanics
router.get("/all", allMechs);

module.exports = router