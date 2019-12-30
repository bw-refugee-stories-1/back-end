const express = require ('express');
// const helmet = require('helmet')

const server = express();

// server.use(helmet())

server.get('/', (req, res) => {
    console.log(req);
    res.send('Hello');
})

server.listen(4040, () => console.log('server is listening on port 4040'));
