const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const _ = require('underscore');

const Usuario = require('../models/usuario');


app.get('/usuario', (req, res) => {

    let desde = Number(req.query.desde || 0);
    let limite = Number(req.query.limite || 5);

    Usuario.find({ estado: true })
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            Usuario.count({ estado: true }, (err, cuantos) => {
                return res.json({
                    ok: true,
                    usuarios,
                    cuantos
                })
            })

        })
})

app.post('/usuario', (req, res) => {
    let body = req.body;
    let theUser = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    theUser.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            usuarioDB
        })
    })
})

app.put('/usuario/:id', (req, res) => {
    let theId = req.params.id
    let theBody = _.pick(req.body, ['nombre', 'email', 'role', 'img', 'estado']);

    Usuario.findByIdAndUpdate(theId, theBody, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            usuario: usuarioDB
        })
    })

})
app.delete('/usuario/:id', (req, res) => {
    let theId = req.params.id;

    Usuario.findByIdAndUpdate(theId, { estado: false }, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        return res.json({
            ok: true,
            usuario: usuarioDB
        })
    })
})

module.exports = app;