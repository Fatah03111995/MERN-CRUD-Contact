import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactsRoute from "./routers/contacts.js";
import usersRoute from "./routers/users.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// routes
app.use("/contacts", contactsRoute);
app.use("/users", usersRoute);

// mongodb configuration and connection
const PORT = process.env.PORT || 6000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `mongoose has been connected and server is listening from PORT : ${PORT}`
      );
    });
  })
  .catch((e) => {
    console.log(e);
  });
