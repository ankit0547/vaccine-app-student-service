import express from "express";
import { getLandingDetails } from "../controllers/getLandingDetails.js";

const router = express.Router();

router.get("/", getLandingDetails);

export default router;
