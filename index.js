const express = require ('express');

const server = express();
server.use(express.json());



server.get('/', (req, res) => {
    console.log(req);
    res.send('Hello');
})

const port = 4040;
server.listen(4040, () => console.log(`server listening on ${port}`));
