import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  editUserById,
  deleteUserById,
} from "../controllers/users.js";

const routes = express.Router();
routes
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/", addUser)
  .patch("/:id", editUserById)
  .delete("/:id", deleteUserById);

export default routes;
