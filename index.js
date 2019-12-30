const express = require ('express');

const server = express();
server.use(express.json());

const authRouter = require('./auth/auth-router.js');

server.use('/auth', authRouter);





const port = 4040;
server.listen(4040, () => console.log(`server listening on ${port}`));
