const BaseRepository = require("./base.repository");
let _user = null;

class UserRepository extends BaseRepository {
    constructor({ User }){
//Para pasar el constructor de la clase padre a la hija se usa "super"
        super(User);
        _user = User;
    }

    async getUserByUsername(username){
        return await _user.findOne({ username });
    }
}

module.exports = UserRepository;