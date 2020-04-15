const BaseRepository = require("./base.repository");
let _comment = null;

class CommentRepository extends BaseRepository {
        constructor({ Comment }){
//Para pasar el constructor de la clase padre a la hija se usa "super"
            super(Comment);
            _comment = Comment;
        }
}

module.exports = CommentRepository;