const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = function(req, res, next){
    const token = req.headers["authorization"];
    if(!token){
        const error = Error();
        error.status = 400;
        error.message = "Token must be sent";
        throw error;
    }

//Validar token
    jwt.verify(token, { JWT_SECRET }, function(err, decodedToken){
        if(err){
            const error = Error();
            error.status = 401;
            error.message = "Invalid Token";
            throw error; 
        }
/*En caso de existir, se inserta la propiedad decodedToken al objeto User proveniente del Helper jwt
 y que se añade en el req para saber que usuario esta conectado*/
        req.user = decodedToken.user;
        next();
    });    
};