class BaseRepository {
    constructor(model){
        this.model = model;
    }

//Obtener Documento de Mongo por Id
    async get(id){
        return await this.model.findById(id);
    }

    async getAll(){
        return await this.model.find();
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
//Mongoose New: true retornará la entidad que ha sido actualizada
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id){
        await this.model.finByIdAndDelete(id);
        return true;
    }
}


module.exports = BaseRepository;