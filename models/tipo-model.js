import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    Descricao: String
});
export default mongoose.model('Tipo', Schema);