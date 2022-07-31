import connectDB from "../../../connectDB"
import Job from "../../../model/jobModel"
import Application from "../../../model/applicationModel"
import { ObjectId } from "mongodb";
import Authenticated from "../../../lib/middleware/isAuth"
connectDB()

export default Authenticated(async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  console.log("get1", req.user);
  if(!req.user){
    return res.status(404).json({message: "Please login"})
  }
  // try {
    // if (req.method === "PUT") {
    //   const { apply} = req.body
    //   const job = await Job.findById(id);
    //   //console.log(job)
    //   if (!job.applied?.includes(apply)){
    //      await job.updateOne({ $push: {applied: apply}});
    //     return res.status(200).json({message: `"you applied", ${job.position}`})
    //   } else {
    //     await job.updateOne({ $pull: {applied: apply}});
    //      return res.status(200).json({message: `"you already applied", ${job.position}`})
    //   }
    // }
    // } catch (err) {
    //   return res.status(500).json({message: `'ggg', ${err}`})
    // }

    if (req.method === "GET") {
      try {
        const job = await Job.find();
       return res.status(200).json(job);
      } catch (err) {
        return res.status(500).json(err);
      }
      
    }
    
    try {
    if (method === "POST") {
      const { jobid, apply } = req.body
      const newApplication = await new Application({
        jobId: new ObjectId(jobid),
        applicantId: new ObjectId(apply),

      }).save()

      await newApplication.save()


      return res.status(200).json({
        message: `you applied successfully`,
      })
    }
  } catch (err) {
    return res.status(500).json(err);
  }

  
})


