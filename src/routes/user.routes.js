const { Router} = require("express");
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware } = require("../middlewares")
const { CACHE_TIME } = require("../helpers");

module.exports = function({ UserController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:userId", UserController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)], UserController.getAll);
    router.patch("/:userId", AuthMiddleware, UserController.update);
    router.delete("/:userId", AuthMiddleware, UserController.delete);

    return router;
};