const ModelUser = require('../modelos/modelo');
const usuarioCtrl ={};

//create
usuarioCtrl.createUser = async(req, res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}

//consulta
usuarioCtrl.getUsers = async(req, res)=>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
}

// consultar por id
usuarioCtrl.getUniqueUser = async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta)
}

//Actualiar
usuarioCtrl.editUser = async(req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}

//eliminar
usuarioCtrl.deleteUser = async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports = usuarioCtrl;   