const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({

    comment: { type: String, required: true },
    description: { type: String },
    // Se relacionará el model user al author
    author: { 
        type: Schema.Types.ObjectId,
        ref: "user", 
        required: true, 
        autopopulate: true }
});

//Configuración de Plugin Autopopulate para comentarios
CommentSchema.plugin(require("mongoose-autopopulate"));


module.exports = mongoose.model("comment", CommentSchema);