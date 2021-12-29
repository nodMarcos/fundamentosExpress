const express = require('express');
const server = express();

server.get('/', function(req, res, next) {
    console.log('Inicio...');
    next();
    console.log('Fim...')
})

server.get('/', function(req, res) {
    console.log('resposta...');
    res.send('<h1>Hello...</h1>')
})


const port = 3000;
server.listen(port, ( ) => {
    console.log('Rodando na porta: ', port)
})