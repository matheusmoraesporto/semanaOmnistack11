const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Tipos de parâmetros:
// Query: parâemtros nomeados são geralmente enviados na rota para filtros e paginação, após p "?"
// Exemplo: ?name=Diego&idade=25
// Route params: parâmetros utilizados para identificar recursos
// Exemplo: users/1 //usuário com o id 1 para acessar 'request.params'
// Request body: Corpo da requisição, utilizado para criar dados, envia todos os dados. Para acessar apenas utilizar: 'request.body''

// Rotas
// Sessions
routes.post('/sessions', SessionController.create);

// Ongs
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

// Incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);

routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:  Joi.number().required()
    })
}), IncidentsController.delete);

// Profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

module.exports = routes;