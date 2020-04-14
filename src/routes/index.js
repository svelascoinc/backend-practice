/* Este archivo sera el Router principal, inyectará los middlewares que se requieran
y configurará todas las rutas*/
const express = require('express');
// Dependencia de producción
const cors = require('cors');
// Middleware que cubrirá brechas de seguridad
const helmet = require('helmet');
// Comprime las peticiones http para que sean mas rapidas
const compression = require('compression');
// Capturara en un middleware las excepciones asincronas de las promesas
require('express-async-errors');
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares")

module.exports = function({ HomeRoutes }){
    const router = express.Router();
    const apiRoutes = express.Router();

//Middlewares que se ejecutarán desde el inicio
    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
};