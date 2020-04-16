const { Router} = require("express");
const { AuthMiddleware } = require("../middlewares")

module.exports = function({ UserController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:userId", UserController.get);
    router.get("", [AuthMiddleware], UserController.getAll);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};