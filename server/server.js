require('./config/config')
const express = require('express');
const mongoose = require('mongoose');
const app = express();





const bodyParser = require('body-parser');

const puerto = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))





mongoose.connect(process.env.connstring, (err, res) => {
    if (err) throw err;
    console.log('base de datos lista');

});
app.listen(puerto, () => {
    console.log(`escuchando el puerto ${puerto}`);
})