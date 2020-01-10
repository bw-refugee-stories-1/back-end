const server = require('../server.js');
const request = require('supertest');


// 1.
describe('users', () => {
    it('get /', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200)
    })
})