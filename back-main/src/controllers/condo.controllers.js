//Se hace la constante que se usará en el models
const Condon = require("../models/CondonJuan");
const salytRounds = 10
var jwt = require('jsonwebtoken')

//Consulta para añadir datos
const saveCondon = async (req, res) => {
    const newCondon = new Condon({
        _id: req.body._id,
        marca: req.body.marca,
        cantidad: req.body.cantidad
    });
    const savedCondon = await newCondon.save();
    // console.log(savedCondon);
    res.json(newCondon);
};

//Funcion para obtener uno en especifico
const findOne = async (req, res) => {
    const Onecondon = await Condon.findById(req.params.id)
    res.send({
        condon: Onecondon
    })
}

//Consulta para buscar todos los datos de la BD
const findAllCondon = async (req, res) => {
    const oldCondon = await Condon.find();
    res.json(oldCondon);
};

//Consulta para eliminar un dato con su ID
const deleteCondon = async (req, res) => {
    await Condon.findByIdAndDelete(req.params.id);
    res.json({
        mensaje: "El dato ha sido eliminado"
    });
};

//Consulta para actualizar un dato con su ID
const updateCondon = async (req, res) => {
    const updatedCondon = await Condon.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        mensaje: "El dato se ha actualizo :D",
    });
};

//Funcion que elimina un dato de la BD a travez de la maquina dispensadora.
const restCondon = async (req, res) => {
    const restCondon = await Condon.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        mensaje: "El dato se ha actualizo :D",
    });

};

//Exportacion de las consultas a models
module.exports = {
    saveCondon,
    findAllCondon,
    deleteCondon,
    updateCondon,
    restCondon,
    findOne
}