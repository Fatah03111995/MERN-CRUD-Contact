import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // const isSame = Users.findOne({ email: email });
    // // console.log(isSame);
    // // if (isSame) {
    // //   console.log("email tidak boleh sama");
    // //   return res.status(400).json({ message: "email tidak boleh sama" });
    // // }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Users({
      name,
      email,
      password: hash,
    });
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log("login");
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "user does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({ message: "invalid credential" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    console.log(user);

    res.status(201).json({ user, token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
