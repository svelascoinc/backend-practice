const mongoose = require("mongoose");
const { Schema } = mongoose;
/*
CompareSync: Comparará la contraseña introducida con la contraseña ya encriptada
hashSync: Creará el hash para las contraseñas
genSaltSync: Se le agregará al hash para la generación de contraseña
*/
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema= new Schema ({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// ### Creación de Metodos ### //

/* Sobreescribir metodo de Mongoose toJSON, para que cada vez que se quiera leer
un documento, la propiedad password no este incluída en la lectura*/
UserSchema.methods.toJSON = function(){

//Se convertirá el documento de mongoose en un objeto de js
    let user = this.toObject();
    delete user.password;
    return user;

}

//Creación de Metodo para comparar el Password
UserSchema.methods.comparePasswords = function(password){
    return compareSync(password, this.password)
}


//Validaciones antes de Guardado de datos
UserSchema.pre("save", async function(next){
//El this tendrá el objeto del usuario que se quiere guardar
    const user = this;

//Validará si se está modificando la contraseña
    if(!user.isModified("password")){
        return next();
    }

//Creación y Asignación de Contraseña Encriptada en Objeto
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();

});


//Según Doc se debe pasar para model, un name y un schema
module.exports = mongoose.model("user", UserSchema);