//Libreria para hacer las consultas
const mongoose = require('mongoose');

//Se delcaran las variables y sus valores
const CondonSchema = mongoose.Schema({
    marca: { 
       type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Condon", CondonSchema);