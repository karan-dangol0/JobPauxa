import Admin from "../models/adminAuth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";


export const adminLogin = async (req, res) => {


  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: "admin not found" });
    }

    // const isPasswordValid = await bcrypt.compare(password, admin.password);
    // if (!isPasswordValid) {
    //   return res.status(400).json({ success: false, message: "Invalid password" });
    // }

    const accessToken = generateAccessToken(admin._id);
    const refreshTokenValue = generateRefreshToken(admin._id);

    res.cookie("refreshToken", refreshTokenValue, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.PRODUCTION === "true",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Logged in",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* ---------------- REFRESH TOKEN ---------------- */
export const refreshToken = async (req, res) => {
  try {
    const refreshTokenValue = req.cookies.refreshToken;

    if (!refreshTokenValue) {
      return res.status(401).json({
        success: false,
        message: "No refresh token",
      });
    }

    const decoded = jwt.verify(refreshTokenValue, process.env.REFRESH_TOKEN_SECRET);

    const newAccessToken = generateAccessToken(decoded.adminId);

    return res.status(200).json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
};