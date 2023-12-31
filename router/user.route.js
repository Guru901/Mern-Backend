const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/addUser", userController.addUser);
router.post("/login", userController.login);
router.post("/editUserSend", userController.editUserSend);
router.get("/getAllUsers", userController.getAllUsers);
router.delete("/deleteUser", userController.deleteUser);
router.post("/editUser", userController.editUser);

module.exports = router;
