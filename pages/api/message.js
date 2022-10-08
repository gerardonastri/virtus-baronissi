import dbConnect from "../../util/mongo";
import Message from '../../models/Message'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
    try {
        const messages = await Message.find()
        res.status(200).json(messages)
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const {nome, telefono, email, messaggio} = req.body;
      try {
          const message = await Message.create({
            nome,
            telefono,
            email,
            messaggio
          })
          res.status(200).json(message)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
        const {id} = req.query
      try {
          const message = await Message.findByIdAndUpdate(id, req.body)
          res.status(200).json(message)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
        const {id} = req.query
      try {
          await Message.findByIdAndDelete(id)
          res.status(200).json('deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler