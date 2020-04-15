const {createContainer, asClass, asValue, asFunction} = require("awilix");

const config = require("../config");

const app = require('.');

const { HomeService, UserService, IdeaService, CommentService } = require("../services");

const { HomeController, UserController, IdeaController, CommentController } = require("../controllers");

const { HomeRoutes } = require("../routes/index.routes");

const { User, Comment, Idea } = require("../models")

const routes = require("../routes")

const { UserRepository, IdeaRepository, CommentRepository } = require("../repositories")

const container = createContainer();

/*Se creará una inyección de dependencia la cual será una clase tipo singleton para que
siempre sea la misma instancia de la clase, compartida por las demas*/
container
.register({
    app: asClass(app).singleton(),
    router: asFunction(routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
}).register({
//Se utiliza el Bind(), para mantener el scope
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
});

module.exports = container;