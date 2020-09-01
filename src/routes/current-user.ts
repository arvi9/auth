import express from "express";
import { currentUser } from "@adc9tickets/common";
import { requireAuth } from "@adc9tickets/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
