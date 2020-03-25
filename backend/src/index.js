const express = require('express');

const cors = require('cors');

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

// seta a porta da aplicação
app.listen(3333);