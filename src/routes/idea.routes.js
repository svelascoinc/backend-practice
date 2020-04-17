const { Router} = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ IdeaController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:ideaId", IdeaController.get);
    router.get("", [ParseIntMiddleware, AuthMiddleware],IdeaController.getAll);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.post("", AuthMiddleware, IdeaController.create);
    router.patch("/:ideaId", AuthMiddleware,IdeaController.update);
    router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
    router.post("/:ideaId/upvote", AuthMiddleware,IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote",AuthMiddleware, IdeaController.downvoteIdea);
    return router;
};