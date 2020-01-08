const express = require ('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());


const authRouter = require('./auth/auth-router.js');
server.use('/auth', authRouter);

const usersRouter = require('./users/users-router.js');
server.use('/users', usersRouter);

const storiesRouter = require('./users/stories-router.js');
server.use('/stories', storiesRouter);

server.get('/', (req, res ) => {
    res.send("<h1>WORKING!!!!!!!!!!!!! </h1>")
})



const port = process.env.PORT || 4040;

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });

