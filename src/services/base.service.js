class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async get(id){
//Si no tiene Id
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }
//Si existe Id se realiza la búsqueda
        const currentEntity = await this.repository.get(id);
//Si no encuentra en búsqueda
        if(!currentEntity){
            const error = new Error();
            error.status = 404;
            error.message = "entity does not found";
            throw error;
        }
//Retorna la entidad de la búsqueda
        return currentEntity;
    }

    async getAll(pageSize, pageNum){
        return await this.repository.getAll(pageSize, pageNum);
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
//Si no tiene Id
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }

        return await this.repository.update(id, entity);
    }

    async delete(id){
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }

        return await this.repository.delete(id);
    }
}

module.exports = BaseService;