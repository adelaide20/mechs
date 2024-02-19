const express = require("express")
const router = express.Router()

const { profile, allMechs, mech } = require("../controller/mechanic_profile");

// 1. create mechanic profile
router.post("/create", profile);

// 2. get all mechanics info
router.get("/all", allMechs);

// 3. get a specific mechanic info
router.get("/one/:id", mech);

module.exports = router