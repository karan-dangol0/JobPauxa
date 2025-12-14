import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    phone: {
      type: String,
    },

    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },


    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },



    website: {
      type: String,
    },

    logo: {
      type: String, // image URL
    },

    registrationImg: {
      type:  String
    },

   
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
