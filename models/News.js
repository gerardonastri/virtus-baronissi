const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    coverImg: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    body: {
        type: String
    }

}, {timestamps: true})

export default mongoose.models.News || mongoose.model('News', NewsSchema)