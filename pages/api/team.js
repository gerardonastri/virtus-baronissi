import dbConnect from "../../util/mongo";
import Team from '../../models/Team'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
      const {id} = req.query
    try {
        if(id){
          const team = await Team.findOne({name: id })
          res.status(200).json(team)
        } else {
          const teams = await Team.find()
          res.status(200).json(teams)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const {name, images, roaster, classifica, calendario} = req.body;
      try {
          const team = await Team.create({
            name,
            images,
            roaster,
            classifica,
            calendario

          })
          res.status(200).json(team)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
        const {id} = req.query
      try {
          const team = await Team.findByIdAndUpdate(id, {
            $push: {images: req.body.img}
          })
          res.status(200).json(team)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
        const {id} = req.query
      try {
          await Team.findByIdAndDelete(id)
          res.status(200).json('deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler