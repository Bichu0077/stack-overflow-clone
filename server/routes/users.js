const express = require("express");

const { login, signup } = require("../controllers/auth");
const { getAllUsers, updateProfile } = require("../controllers/users");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

module.exports = router;
