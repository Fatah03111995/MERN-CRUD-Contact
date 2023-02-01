import mongoose, { Schema } from "mongoose";

const Users = new Schema(
  {
    name: {
      type: String,
      require: true,
      min: 2,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", Users);
