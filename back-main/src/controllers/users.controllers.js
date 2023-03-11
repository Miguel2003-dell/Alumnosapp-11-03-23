const User = require('../models/Usuarios');
const bcrypt = require('bcrypt');
const salytRounds = 10
var jwt = require('jsonwebtoken')

const findAllUsers = async (req, res) => {
    const oldUser = await User.find();
    res.json(oldUser);
};

const Login = async (req, res) => {
    const someUser = await User.findOne({ user: req.body.User });
    if (someUser) {
        const cmp = await bcrypt.compare(req.body.password, someUser.password);
        if (cmp) {
            var token = jwt.sign({ user: someUser.user, _id: someUser._id }, 'Secret', {
                expiresIn: "2h"
            });
            res.send({
                user: someUser.user,
                nombre: someUser.nombre,
                apellido: someUser.apellido,
                auth: true,
                token: token,
            })
        } else {
            res.send("Usuario o contraseña incorrecto");
        }
    } else {
        res.send("Usuario o contraseña incorrecto");
    }
};

const saveUsers = async (req, res) => {
    const hashedPWD = await bcrypt.hash(req.body.password, salytRounds)
    const newUser = new User({
        user: req.body.user,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        password: hashedPWD,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
};
module.exports = {
    findAllUsers,
    Login,
    saveUsers
}