import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    Nome: String
});
export default mongoose.model('Cliente', Schema);