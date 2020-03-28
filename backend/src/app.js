const express = require('express');

const cors = require('cors');

const { errors } = require('celebrate');

// Importa as rotas
const routes = require('./routes');

// instância a aplicação
const app = express();

app.use(cors(
    // Exemplo com ambiente em produção
    // {
    //     origin: 'https://meuapp.com'
    // }
));

// Todas as requisições converterão o json para obj js
app.use(express.json());
app.use(routes);

// Tratamento dos erros encontrados pelo celebrate
app.use(errors());

module.exports = app;