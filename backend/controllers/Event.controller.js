import Event from "../models/eventDetails.model.js";

export const registerEvent = async (req, res) => {
  try {
    const {
      title,
      category,
      eventType,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      venueDetails,
      capacity,
      registrationFee,
      description,
      agenda,
      requirements,
      tags,
      organizer,
      contactEmail,
      contactPhone,
      website,
      registrationDeadline,
      status,
    } = req.body;

    // Required fields validation
    if (!title || !category || !eventType || !startDate || !startTime || !location) {
      return res.status(400).json({
        success: false,
        message: "Required fields: title, category, eventType, startDate, startTime, location",
      });
    }

    // Email validation
    if (contactEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactEmail)) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact email address",
        });
      }
    }

    // Date validation - ensure start date is not in the past
    const now = new Date();
    const eventStartDate = new Date(startDate);

    if (eventStartDate < now) {
      return res.status(400).json({
        success: false,
        message: "Start date cannot be in the past",
      });
    }

    // Date range validation - end date should be after start date
    if (endDate) {
      const eventEndDate = new Date(endDate);
      if (eventEndDate < eventStartDate) {
        return res.status(400).json({
          success: false,
          message: "End date must be after start date",
        });
      }
    }

    // Registration deadline validation
    if (registrationDeadline) {
      const deadline = new Date(registrationDeadline);
      if (deadline > eventStartDate) {
        return res.status(400).json({
          success: false,
          message: "Registration deadline must be before event start date",
        });
      }
    }

    // Capacity validation
    if (capacity && capacity < 1) {
      return res.status(400).json({
        success: false,
        message: "Capacity must be at least 1",
      });
    }

    // Registration fee validation
    if (registrationFee && registrationFee < 0) {
      return res.status(400).json({
        success: false,
        message: "Registration fee cannot be negative",
      });
    }

    // Get company/organizer ID from authenticated user
 /*   const companyId = req.user?.userId || req.user?.id;

    if (!companyId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required to create events",
      });
    }*/

    // Create new event
    const newEvent = new Event({
      title,
      category,
      eventType,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      venueDetails,
      capacity,
      registrationFee: registrationFee || 0,
      description,
      agenda,
      requirements,
      tags: tags || [],
      organizer: organizer || companyId,
      contactEmail,
      contactPhone,
      website,
      registrationDeadline,
      status: status || "upcoming",
      createdBy: companyId,
      registeredParticipants: [],
      currentAttendance: 0,
    });

    // Save event to database
    await newEvent.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Event registered successfully",
      data: {
        event: newEvent,
      },
    });
  } catch (error) {
    console.error("Event registration error:", error);

    // Handle duplicate event title error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An event with this title already exists",
      });
    }

    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during event registration",
    });
  }
};

// Additional helpful event controllers

export const getAllEvents = async (req, res) => {
  try {
    const { category, eventType, status, search } = req.query;
    const filter = {};

    // Apply filters
    if (category) filter.category = category;
    if (eventType) filter.eventType = eventType;
    if (status) filter.status = status;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const events = await Event.find(filter)
      .populate("organizer", "name emailAdress logo")
      .sort({ startDate: 1 });

    res.status(200).json({
      success: true,
      count: events.length,
      data: { events },
    });
  } catch (error) {
    console.error("Get events error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching events",
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id)
      .populate("organizer", "name emailAdress phoneNumber companyWebsite logo")
      .populate("registeredParticipants", "name email");

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: { event },
    });
  } catch (error) {
    console.error("Get event error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching event",
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const companyId = req.user?.userId || req.user?.id;

    // Find event
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check if user is the creator
    if (event.createdBy.toString() !== companyId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this event",
      });
    }

    // Update event
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: { event: updatedEvent },
    });
  } catch (error) {
    console.error("Update event error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating event",
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const companyId = req.user?.userId || req.user?.id;

    // Find event
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check if user is the creator
    if (event.createdBy.toString() !== companyId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this event",
      });
    }

    await Event.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete event error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting event",
    });
  }
};
