const server = require('../server.js');
const request = require('supertest');
const db = require('../data/db.js');


// 7.
describe('login/registration server', () => {
    // /register
    describe('registration', () => {

        beforeEach(async () => {
            await db('users').truncate()
        })

        const userData = {username: "user", password: "pass"}

        it('should return a status code 201 when successful', () => {
            let response
            return request(server).post('/auth/register').send(userData).then(res => {
                response = res
                expect(response.status).toBe(201)
            })
        })

       
    })

})