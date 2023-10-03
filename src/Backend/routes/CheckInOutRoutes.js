import express from "express";
import checkInOutController from "./../controllers/CheckInOutController.js";

const router = express.Router();

router.post("/checkin/:userId", checkInOutController.checkIn);
router.put("/checkout/:userId", checkInOutController.checkOut);

export default router;