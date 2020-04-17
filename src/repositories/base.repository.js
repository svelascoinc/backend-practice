class BaseRepository {
    constructor(model){
        this.model = model;
    }

//Obtener Documento de Mongo por Id
    async get(id){
        return await this.model.findById(id);
    }
//Configuración para Paginación de elementos retornados en all
    async getAll(pageSize = 5, pageNum = 1){
        const skips = pageSize * (pageNum -1);
        return await this.model
        .find()
        .skip(skips)
        .limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
//Mongoose New: true retornará la entidad que ha sido actualizada
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }
}


module.exports = BaseRepository;
