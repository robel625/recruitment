import connectDB from "../../../connectDB"
import Job from "../../../model/jobModel"
import { ObjectId } from "mongodb";

connectDB()

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  try {
    if (req.method === "PUT") {
      const { apply} = req.body
      const job = await Job.findById(id);
      //console.log(job)
      if (!job.applied?.includes(apply)){
         await job.updateOne({ $push: {applied: apply}});
        return res.status(200).json({message: `"you applied", ${job.position}`})
      } else {
        await job.updateOne({ $pull: {applied: apply}});
         return res.status(200).json({message: `"you already applied", ${job.position}`})
      }
    }
    } catch (err) {
      return res.status(500).json({message: `'ggg', ${err}`})
    }

    if (req.method === "GET") {
      try {
        const job = await Job.find();
       return res.status(200).json(job);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

  
}


