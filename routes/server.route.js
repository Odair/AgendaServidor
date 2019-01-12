import express from 'express';
import * as usuarioController from '../controllers/usuario-controller';

const router = express.Router();
router.route('/usuarios')
    .get(usuarioController.getUsuarios)
    .post(usuarioController.addUsuario)
    .put(usuarioController.updateUsuario);
router.route('/usuario/:id')
    .get(usuarioController.getUsuario)
    .delete(usuarioController.deleteUsuario);
export default router;