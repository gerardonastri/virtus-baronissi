const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    images: {
        type: [String]
    }, 
    roaster: {
        type: [
            {
                nome: String,
                anno: Number,
                numero: Number,
                punti: Number,
                partite: Number,
            }   
        ]
    },
    classifica: {
        type: [
            {
                nome: String,
                posizione: Number,
                punti: Number,
                partite: Number
            }   
        ]
    },
    calendario: {
        type: [
            {
                partita: String,
                data: String,
                risultato: String
            }   
        ]
    }

}, {timestamps: true})

export default mongoose.models.Team || mongoose.model('Team', TeamSchema)