import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      minlength: 2,
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide a position name"],
      minlength: 2,
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "intern"],
      default: "full-time",
    },

    jobLocation: {
      type: String,
      maxlength: 20,
      trim: true,
      default: "kolkata",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide all values"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
