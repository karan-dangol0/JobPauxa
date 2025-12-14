import express from "express";
import { companyLogin, registerCompany } from "../controllers/companiesDetails.controller.js";

const organizationAuth = express.Router();

organizationAuth.post("/company/register", registerCompany);
organizationAuth.post("/company/login", companyLogin);

export default organizationAuth;