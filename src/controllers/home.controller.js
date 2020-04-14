let _homeService = null;

class HomeController {
/* Se llama al HomeService desde container.js por Awilix
para inyectar la dependencia a la clase*/
    constructor({ HomeService }) {
        _homeService = HomeService;
    }

    index(req,res){
        return res.send(_homeService.index());
    }
}

module.exports = HomeController;