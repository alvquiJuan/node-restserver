require('./config/config')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const puerto = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', (req, res) => {
    res.json('lista de usuarios')
})

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre == undefined) {
        res.status(400);
        res.json({
            msg: 'se requiere un nombre'
        })
    } else {
        res.json({ body })
    }
})

app.put('/usuario/:id', (req, res) => {
    let theId = req.params.id
    res.json({ 'id': theId })
})
app.delete('/usuario', (req, res) => {
    res.json('delete de usuarios')
})
app.listen(puerto, () => {
    console.log(`escuchando el puerto ${puerto}`);
})