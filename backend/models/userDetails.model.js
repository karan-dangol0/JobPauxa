import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  fieldOfStudy: String,
  startDate: Date,
  endDate: Date,
});

const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  sector: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  projectLink: String,
});

const trainingSchema = new mongoose.Schema({
  title: String,
  provider: String,
  completionDate: Date,
});

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,
  year: Number,
});

const userProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // auth user
      required: true,
      unique: true,
    },

    // Basic Info
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    profilePicture: {
      type: String, // image URL
    },

    // Professional Info
    sector: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    aboutMe: {
      type: String,
      required: true,
    },

    // Contact
    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    phone: {
      type: String,
    },

    // Sections
    education: [educationSchema],

    experience: [experienceSchema],

    projects: [projectSchema],

    skills: {
      type: [String], // ["React", "Node.js", "MongoDB"]
      default: [],
    },

    achievements: [achievementSchema],

    training: [trainingSchema],

    languages: {
      type: [String], // ["English", "Nepali"]
      default: [],
    },

    status: {
      type: String,
      enum: ["Active", "Hidden"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
