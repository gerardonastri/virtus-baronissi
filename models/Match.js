const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    opposingTeam: {
        type: String
    },
    opposingTeamImg: {
        type: String,
        default: 'https://cdn2.iconfinder.com/data/icons/cinema-51/64/18_Guest_group_people_team_work-512.png'
    },
    virtusScore: {
        type: Number
    },
    opposingTeamScore: {
        type: Number
    },
    category:{
        type: String
    },
    type: {
        type: String
    },
    data: {
        type: String
    }, 
    luogo: {
        type: String
    }

}, {timestamps: true})

export default mongoose.models.Match || mongoose.model('Match', MatchSchema)