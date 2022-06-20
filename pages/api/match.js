import dbConnect from "../../util/mongo";
import Match from '../../models/Match'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
    try {
        const matches = await Match.find()
        res.status(200).json(matches)
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const {opposingTeam, opposingTeamImg, virtusScore, opposingTeamScore} = req.body;
      try {
          const match = await Match.create({
            opposingTeam: opposingTeam,
            opposingTeamImg: opposingTeamImg,
            virtusScore: virtusScore,
            opposingTeamScore: opposingTeamScore

          })
          res.status(200).json(match)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
        const {id} = req.query
      try {
          const match = await Match.findByIdAndUpdate(id, req.body)
          res.status(200).json(match)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
        const {id} = req.query
      try {
          await Match.findByIdAndDelete(id)
          res.status(200).json('deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler