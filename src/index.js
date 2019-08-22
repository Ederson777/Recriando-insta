const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); // envia informações em tempo real

mongoose.connect('mongodb+srv://semana:semana@cluster0-f4yf7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}); // Conexção com Banco de dados

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors()); // todos os endereços acessa o Backend

app.use('/file', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes')); // declaração de rotas

server.listen(2222);