import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    applicants: {
      type: Number,
      default: 0,
      min: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Closed", "Draft"],
      default: "Active",
    },

    postedDate: {
      type: Date,
      default: Date.now,
    },

    deadline: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    requirements: {
      type: String,
      required: true,
    },

    salary: {
      type: String, // keep string for ranges like "80,000 - 120,000"
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
