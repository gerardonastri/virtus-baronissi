import dbConnect from "../../util/mongo";
import User from '../../models/User'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === "GET"){
      try {
          const users = await User.find({});
          res.status(200).json(users)
      } catch (error) {
          console.log(error);
          res.status(500).json(error.message)
      }
    }
}

export default handler