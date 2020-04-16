const { Router} = require("express");

module.exports = function({ AuthController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.post("/signup", AuthController.signUp);
    router.post("/signin", AuthController.signIn);
    return router;
};