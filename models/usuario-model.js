import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    nome: String,
    senha: String
});
export default mongoose.model('Usuario', Schema);