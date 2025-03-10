const express =require ('express');
const router = express.Router();
const usuarioCtrl = require('../controlador/usuario.contolador');

router.get('/', usuarioCtrl.getUsers);
router.post('/', usuarioCtrl.createUser);
router.get('/:id', usuarioCtrl.getUniqueUser);
router.put('/:id', usuarioCtrl.editUser);
router.delete('/:id', usuarioCtrl.deleteUser);

module.exports = router;