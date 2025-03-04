const moogoose = require("mongoose");
require ('dotenv').config()
const dbconnect = () =>{
    moogoose.set('strictQuery', true)
    moogoose.connect(process.env.MONGODB_URL)
    .then((success)=> console.log("Conexion exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;