const { Router} = require("express");

module.exports = function({ UserController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:userId", UserController.get);
    router.get("", UserController.getAll);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};