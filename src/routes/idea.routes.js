const { Router} = require("express");
const { ParseIntMiddleware } = require("../middlewares");

module.exports = function({ IdeaController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:ideaId", IdeaController.get);
    router.get("", ParseIntMiddleware,IdeaController.getAll);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.post("", IdeaController.create);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.post("/:ideaId/upvote",IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote",IdeaController.downvoteIdea);
    return router;
};