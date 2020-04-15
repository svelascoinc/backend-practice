const { Router} = require("express");

module.exports = function({ CommentController }) {
    const router = Router();

/* Cuando se invoque un llamado a la ruta Home, 
El controlador HomeController se ejecutará con el metodo Index()*/
    router.get("/:commentId/unique", CommentController.get);
    router.get("/:ideaId", CommentController.getIdeasComments);
    router.post("/:ideaId", CommentController.createComment)
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    return router;
};