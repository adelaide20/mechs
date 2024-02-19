const express = require("express")
const router = express.Router()

const { profile } = require("../controller/mechanic_profile");

// 1. create mechanic profile
router.post("/create", profile);



module.exports = router