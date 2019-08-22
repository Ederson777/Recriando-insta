const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-f4yf7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(cors());

app.use('/file', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'));

app.listen(2222);