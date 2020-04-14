const { Router} = require("express");

module.exports = function({ HomeController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/", HomeController.index);

    return router;
};