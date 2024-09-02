import express from "express";
const router = express.Router();
import {
  registerUser,
  LoginUser,
  LogOutUser,
} from "../controllers/authController.js";

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.post("/logout", LogOutUser);

export default router;
