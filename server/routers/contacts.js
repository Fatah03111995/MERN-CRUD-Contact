import express from "express";
import {
  getContacts,
  getContactById,
  addContact,
  editContactById,
  deleteContactById,
} from "../controllers/contacts.js";

const routes = express.Router();
routes
  .get("/", getContacts)
  .get("/:id", getContactById)
  .post("/", addContact)
  .patch("/:id", editContactById)
  .delete("/:id", deleteContactById);

export default routes;
