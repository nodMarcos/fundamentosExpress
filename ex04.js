const express = require('express');
const server = express();

server.route('/clientes')
    .get((req, res) => res.send('Lista de clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Remove cliente'))

const port = 3000;
server.listen(port, ( ) => {
    console.log('Rodando na porta: ', port)
})