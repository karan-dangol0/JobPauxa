import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Conference", "Workshop", "Seminar", "Meetup", "Webinar", "Other"],
      default: "Conference",
    },

    eventType: {
      type: String,
      enum: ["In-person", "Online", "Hybrid"],
      default: "In-person",
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String, // e.g. "10:00 AM"
      required: true,
    },

    endTime: {
      type: String, // e.g. "5:00 PM"
      required: true,
    },

    location: {
      type: String,
      required: function () {
        return this.eventType !== "Online";
      },
    },

    venueDetails: {
      type: String,
    },

    capacity: {
      type: Number,
      min: 1,
    },

    registrationFee: {
      type: Number, // NPR amount
      default: 0,
      min: 0,
    },

    description: {
      type: String,
      required: true,
    },

    agenda: {
      type: String,
    },

    requirements: {
      type: String,
    },

    tags: {
      type: [String], // ["tech", "frontend", "react"]
      default: [],
    },

    organizer: {
      type: String,
      required: true,
    },

    contactEmail: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
    },

    contactPhone: {
      type: String,
    },

    website: {
      type: String,
    },

    registrationDeadline: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed", "Cancelled"],
      default: "Upcoming",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
