import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .post("/signup", UserController.registerUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser);

export default router;   