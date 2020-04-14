const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    upvotes: [{ type: Boolean }],
    downvotes: [{ type: Boolean }],
    // Se relacionará el model user al author
    author: { 
        type: Schema.Types.ObjectId,
        ref: "user", 
        required: true, 
//Con autopopulate, cada vez que se consulte la idea, deberá traer la info del autor
        autopopulate: true },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "comment", 
                required: true, 
                autopopulate: true
            }
        ]
});

//Configuración de Plugin Autopopulate para Idea
IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("idea", IdeaSchema);