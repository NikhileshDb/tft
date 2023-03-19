const express = require("express")
const router = express.Router()

const {register, login, test} = require("./authentication/auth")

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/home").get(test)
module.exports = router