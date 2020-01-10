const server = require('./server.js');
const request = require('supertest');


// 5.
describe('server', () => {
    it('get /', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200)
    })
})