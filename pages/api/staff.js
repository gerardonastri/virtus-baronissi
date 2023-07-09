import dbConnect from "../../util/mongo";
import Staff from "../../models/Staff";

const handler = async (req, res) => {
  await dbConnect();
  // const dispatch = useDispatch();
  if (req.method === "GET") {
    try {
      const staff = await Staff.find({});
      res.status(200).json(staff);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
  if (req.method === "POST") {
    try {
      const staff = await Staff.create(req.body);
      res.status(200).json(staff);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
  if (req.method === "DELETE") {
    try {
      await Staff.findByIdAndDelete(req.query.id);
      res.status(200).json("deleted");
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
};

export default handler;
