const express = require("express");
const cors = require("cors");
const dbconnect = require("./configuracion");
const app = express();

app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/api/usuarios', require('./rutas/usuario.ruta'));
app.use('/api/empleados', require('./rutas/empleado.ruta'));
app.listen(3005, ()=>{
    console.log("el servicio esta en el puerto 3005")
})

dbconnect();