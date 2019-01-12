
import Usuario from '../models/usuario-model';
export const getUsuarios = (req, res) => {
    Usuario.find().exec((err, usuarios) => {
        if (err) {
            return res.json({ 'success': false, 'message': err });
        }
        return res.json({ 'success': true, 'message': 'Usuarios buscados com sucesso', usuarios });
    });
}
export const addUsuario = (req, res) => {
    const novoUsuario = new Todo(req.body);
    novoUsuario.save((err, usuario) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': 'Usuario adicionado com sucesso', usuario });
    })
}
export const updateUsuario = (req, res) => {
    Usuario.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, usuario) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
        }
        return res.json({ 'success': true, 'message': 'Atualizado com sucesso', usuario });
    })
}
export const getUsuario = (req, res) => {
    Usuario.find({ _id: req.params.id }).exec((err, usuario) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        if (usuario.length) {
            return res.json({ 'success': true, 'message': 'Usuarios buscados com sucesso', usuario });
        }
        else {
            return res.json({ 'success': false, 'message': 'Usuario buscado nao encontrado' });
        }
    })
}
export const deleteUsuario = (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, (err, usuario) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': usuario.Nome + ' deletado com sucesso' });
    })
}