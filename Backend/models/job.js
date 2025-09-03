import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  link: { type: String, required: true },
  postedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Job", jobSchema);
