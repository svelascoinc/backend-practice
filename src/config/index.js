/* Configuración de Entorno */

/*Si la app no esta desplegada en Prod
se cargarán las variables de entorno de .env*/
if (process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

//Exportará las variables de configuración
module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    JWT_SECRET: process.env.JWT_SECRET
}