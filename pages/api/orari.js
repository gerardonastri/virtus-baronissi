import dbConnect from "../../util/mongo";
import Orari from "../../models/Orari";

const handler = async (req, res) => {
  await dbConnect();
  // const dispatch = useDispatch();
  if (req.method === "GET") {
    try {
      const orari = await Orari.find({});
      res.status(200).json(orari);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
  if (req.method === "POST") {
    try {
      const orario = await Orari.create(req.body);
      res.status(200).json(orario);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
  if (req.method === "DELETE") {
    try {
      await Orari.findByIdAndDelete(req.query.id);
      res.status(200).json("deleted");
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
};

export default handler;
