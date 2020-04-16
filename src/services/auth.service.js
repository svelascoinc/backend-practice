const { generateToken } = require("../helpers/jwt.helper");
let _userService = null;

class AuthService {
    constructor({ UserService }){
        _userService = UserService;
    }

    async signUp(user){
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username);
        if(userExist){
            const error = new Error();
            error.status = 400;
            error.message = "User already exist";
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user){
        const { username, password } = user;
        const userExist = await _userService.getUserByUsername(username);
        if(!userExist){
            const error = new error();
            error.status = 404;
            error.message = "User does not exist";
            throw error;
        }
//Metodo para comparar Password proveniente de model
        const validPassword = userExist.comparePasswords(password);
        if(!validPassword){
            const error = new error();
            error.status = 400;
            error.message = "Invalid Password";
            throw error;
        }

//Objeto para encriptar el token
        const userToEncode = {
            username: userExist.username,
//_id se refiere al id de mongodb
            id: userExist._id
        };

        const token = generateToken(userToEncode);

        return { token, user: userExist};
    }

}

module.exports = AuthService;