import Contacts from "../models/contacts.js";

export const getContacts = async (req, res) => {
  const contacts = await Contacts.find();
  try {
    res.status(200).json(contacts);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
export const getContactById = async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  try {
    res.status(200).json({ contact });
  } catch (e) {
    res.status(404).json({ message: e });
  }
};
export const addContact = async (req, res) => {
  const add = new Contacts(req.body);
  try {
    const added = await add.save();
    res.status(201).json(added);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};
export const editContactById = async (req, res) => {
  try {
    const updated = await Contacts.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json({ updated });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export const deleteContactById = async (req, res) => {
  try {
    const del = await Contacts.deleteOne({ _id: req.params.id });
    res.status(201).json(del);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
