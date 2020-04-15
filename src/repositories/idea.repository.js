const BaseRepository = require("./base.repository");
let _idea = null;

class IdeaRepository extends BaseRepository {
        constructor({ Idea }){
    //Para pasar el constructor de la clase padre a la hija se usa "super"
            super(Idea);
            _idea = Idea;
        }

        async getUserIdeas(author){
            return await _idea.find({ author })
        }
}

module.exports = IdeaRepository;