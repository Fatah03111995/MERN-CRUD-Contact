import Users from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const addUser = async (req, res) => {
  const newUser = new Users(req.body);
  try {
    const add = await newUser.save();
    res.status(201).json(add);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export const editUserById = async (req, res) => {
  try {
    const edited = Users.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(201).json(edited);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export const deleteUserById = async (req, res) => {
  try {
    const deleted = Users.deleteOne({ _id: req.params.id });
    res.status(201).json(deleted);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
