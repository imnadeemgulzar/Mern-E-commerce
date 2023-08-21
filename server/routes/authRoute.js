import { Router } from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// test
router.get("/test", requireSignIn, testController);

export default router;
