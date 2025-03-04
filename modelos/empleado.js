const mongoose = require("mongoose");
const empleadoModel =  new mongoose.Schema({
    nombre: { type: String},
    cargo: { type: String},
    area: {type: String},
    salario: {type: Number}
},
{
    timestamps: true,
    versionKey: false,
})

const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado;