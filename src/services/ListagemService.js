const { Op } = require("sequelize");

class ListagemService {
    static async listagemComPaginacao(Model, nomeModel, filtrosPermitidos, queryParams, includeModel){
        let page = parseInt(queryParams.page) || 1;
        const limit = parseInt(queryParams.limit) || 4;

        const where = {};

        for(let chave of filtrosPermitidos){
            if (queryParams[chave]){
                where[chave] = { [Op.substring]: queryParams[chave] }
            }
        }

        const totalRegistros = await Model.count({ where });
        const totalPaginas = Math.max(1, Math.ceil(totalRegistros / limit));
        if (page < 1 || page > totalPaginas ) page = 1

        let modeloIncluido = includeModel ? { include: includeModel }: {}

        const dados = await Model.findAll({ 
            where, 
            ...modeloIncluido,
            offset: (page - 1) * limit, 
            limit 
        })

        const registros = dados.map(item => item.get({ plain: true }))

        return {
            pagina_atual: page, 
            total_paginas: totalPaginas,
            total_registro: totalRegistros,
            [nomeModel]: registros
        }

    }
}

module.exports = {
    ListagemService
}