import dbConnect from "../../util/mongo";
import Match from '../../models/Match'
import User from '../../models/User'
import News from '../../models/News'
import Message from '../../models/Message'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
        try {
            const users = await User.find()
            const news = await News.find()
            const messages = await Message.find()
            
            res.status(200).json({users, news, messages})

        } catch (error) {
            console.log(error);
            res.status(500).json(error.message)
        }
    }
}

export default handler