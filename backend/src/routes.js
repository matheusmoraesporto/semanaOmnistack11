const express = require('express');

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
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;