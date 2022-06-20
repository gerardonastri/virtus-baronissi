import dbConnect from "../../util/mongo";
import News from '../../models/News'


const handler = async (req,res) => {
  await dbConnect()
    if(req.method === "GET"){
        const {id, cat} = req.query
    try {
        if(id){
            const news = await News.findById(id)
            res.status(200).json(news)
        } else if (cat){
            const news = await News.find({"_id": {"$ne": cat}}).sort([['createdAt', -1]]).limit(3)
            res.status(200).json(news)
        }
         else {
            const news = await News.find()
            res.status(200).json(news)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
    }
    if(req.method === "POST"){
        const {title, desc, coverImg, images, body} = req.body;
      try {
          const news = await News.create({
            title,
            desc,
            coverImg,
            images,
             body

          })
          res.status(200).json(news)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "PUT"){
        const {id} = req.query
      try {
          const news = await News.findByIdAndUpdate(id, req.body)
          res.status(200).json(news)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
    if(req.method === "DELETE"){
        const {id} = req.query
      try {
          await News.findByIdAndDelete(id)
          res.status(200).json('deleted')
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler