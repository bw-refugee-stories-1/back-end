const server = require('../server');
const request = require('supertest');

// 2.
describe('stories', () => {
    it('get /', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200)
    })
})


// 3.
describe('stories', () => {
    it('get /', async () => {
        const res = await request(server).get('/100');
        expect(res.status).toBe(404)
    })
})


