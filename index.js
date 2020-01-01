const express = require ('express');
const cors = require('cors');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const db = require('./data/db.js');

const sessionConfig = {

    secret: process.env.SESSION_SECRET || 'test secret',
    
    name: '',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        // maxAge is set in milliseconds
        // 1000 ms === 1 sec * 60 === 1 min * 60 === 1 hr * 24 === 24 hrs
        secure: process.env.NODE_ENV === "production" ? true : false,
        httpOnly: true
    },

    resave: false,
    // determines whether or not we save the cookie again on multiple visits
    saveUninitialized: false,
    // if true we would be giving everyone a cookie, whether they are logged in or not
    
    store: knexSessionStore({
        knex: db,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30
    })
};

const server = express();
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

const authRouter = require('./auth/auth-router.js');
server.use('/auth', authRouter);

const usersRouter = require('./users/users-router.js');
server.use('/users', usersRouter);




const port = 4040;
server.listen(4040, () => console.log(`server listening on ${port}`));
