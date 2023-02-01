import mongoose, { Schema } from "mongoose";

const Contacts = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "-",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contacts", Contacts);
