import dbConnect from "../../util/mongo";
import News from '../../models/News'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
    try {
        const news = await News.find().sort([['createdAt', -1]]).limit(3)
        res.status(200).json(news)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
    }
}

export default handler