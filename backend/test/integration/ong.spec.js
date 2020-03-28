const request = require('supertest');

const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // Primeiro zera o banco
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    // Encerra a conexão com o banco para tratamento de warnnings 
    afterAll(async () => {
        await connection.destroy();
    })

    it('shoul be able to create a new ONG', async () => {
        const response = 
            await request(app)
            .post('/ongs')
            .send({
                name: 'APDAD2',
                email: 'contato@teste.com',
                whatsapp: '4700000000',
                city: 'Rio do Sul',
                uf: 'SC'
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    })
});