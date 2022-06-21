const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    telefono: {
        type: String
    },
    email: {
        type: String
    },
    messaggio: {
        type: String
    }

}, {timestamps: true})

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)