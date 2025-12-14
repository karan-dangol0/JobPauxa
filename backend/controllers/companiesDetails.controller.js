import Company from "../models/companiesRegistration.model.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";


const registerCompany = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      password,
      confirmPassword,
      logo,
      registrationImg,
      location,
      companyWebsite,
      description,
    } = req.body;

    // Validation
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // Password match validation
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Password strength validation
    if (password.length < 4) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Check if company already exists
    const existingCompany = await Company.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingCompany) {
      return res.status(409).json({
        success: false,
        message: "Company with this email or phone number already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new company
    const newCompany = new Company({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      logo,
      registrationImg,
      location,
      companyWebsite,
      description,
    });

    await newCompany.save();

    // Generate tokens
    const accessToken = generateAccessToken(newCompany._id);
    const refreshToken = generateRefreshToken(newCompany._id);

    // Save refresh token to database (optional but recommended)
    newCompany.refreshToken = refreshToken;
    await newCompany.save();

    // Set refresh token as httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "Company registered successfully",
      data: {
        company: {
          id: newCompany._id,
          name: newCompany.name,
          email: newCompany.email,
          phoneNumber: newCompany.phoneNumber,
          location: newCompany.location,
          companyWebsite: newCompany.companyWebsite,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

const companyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find company by email
    const company = await Company.findOne({ email });

    if (!company) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, company.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate tokens
    const accessToken = generateAccessToken(company._id);
    const refreshToken = generateRefreshToken(company._id);

    // Save refresh token to database
    company.refreshToken = refreshToken;
    await company.save();

    // Set refresh token as httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        company: {
          id: company._id,
          name: company.name,
          email: company.email,
          phoneNumber: company.phoneNumber,
          location: company.location,
          companyWebsite: company.companyWebsite,
          logo: company.logo,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// Bonus: Refresh token endpoint
const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token not found",
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Find company and verify stored refresh token
    const company = await Company.findById(decoded.userId);

    if (!company || company.refreshToken !== refreshToken) {
      return res.status(403).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    // Generate new access token
    const newAccessToken = generateAccessToken(company._id);

    res.status(200).json({
      success: true,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    res.status(403).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
};

// Logout endpoint
const companyLogout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (refreshToken) {
      // Remove refresh token from database
      await Company.updateOne({ refreshToken }, { $unset: { refreshToken: "" } });
    }

    // Clear refresh token cookie
    res.clearCookie("refreshToken");

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during logout",
    });
  }
};

export { registerCompany, companyLogin, refreshAccessToken, companyLogout };
