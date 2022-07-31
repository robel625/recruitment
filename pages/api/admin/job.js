import connectDB from "../../../connectDB"
import Job from "../../../model/jobModel"

connectDB()

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { position, avalablity, status, miniDesc, userid } = req.body
      const newJob = await new Job({
        position: position,
        avalablity: avalablity,
        status:status,
        miniDesc: miniDesc,
        postedBy: userid,
      }).save()

      await newJob.save()


      return res.status(200).json({
        message: ` post successfull ${newJob.position}`,
      })
    }

    if (req.method === "GET") {
      try {
        const job = await Job.find().populate('applied');
        res.status(200).json(job);
      } catch (err) {
        res.status(404).json(err);
      }

    }
    
  } catch (error) {
    console.log(error)
  }
}


