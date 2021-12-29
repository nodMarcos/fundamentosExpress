const express = require('express');
const server = express();

server.use('/api', function(req, res, next) {
    console.log('Inicio...');
    next();
    console.log('Fim...')
})

server.use('/api', function(req, res) {
    console.log('resposta...');
    res.send('<h1>APi...</h1>')
})


const port = 3000;
server.listen(port, ( ) => {
    console.log('Rodando na porta: ', port)
})