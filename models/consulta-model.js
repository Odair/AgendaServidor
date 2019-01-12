import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    Horario: String,
    Data: String,
    Tipo: Number
});
export default mongoose.model('Consulta', Schema);