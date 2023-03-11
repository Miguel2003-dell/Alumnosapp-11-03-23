const express = require('express');
//Se crean las rutas
const router = express.Router();
//Se obtienen los controladores
const userCtrl = require("../controllers/users.controllers");

router.post("/login", userCtrl.Login);

router.post("/", userCtrl.saveUsers);

router.get("/", userCtrl.findAllUsers); 

module.exports = router;


