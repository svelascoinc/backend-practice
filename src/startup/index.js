const express = require("express");

/* Se establecen las variables asi para que sean privadas,
Y que solo sean legibles en esta clase*/

let _express = null;
let _config = null;

class Server {
    constructor({config, router}) {
        _config = config;
        _express = express().use(router);
    }

//Promesa que inicializará el server
    start(){
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(
                    _config.APPLICATION_NAME + " API running on port " + _config.PORT
                );

                resolve();
            });
        });
    }
}

module.exports = Server;