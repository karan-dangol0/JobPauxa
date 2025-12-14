import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    industry: {
      type: String, // e.g. "Digital Marketing"
    },

    website: {
      type: String,
    },

    email: {
      type: String,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    phone: {
      type: String,
    },

    logo: {
      type: String, // image URL
    },

    size: {
      type: String, // e.g. "1-10", "11-50", "50+"
    },

    foundedYear: {
      type: Number,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
