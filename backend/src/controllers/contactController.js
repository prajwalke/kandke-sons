import Contact from "../models/Contact.js";

// Create a new contact
export const createContact = async (req, res) => {
  const { firstName, email, phoneNumber, query } = req.body;

  const newContact = new Contact({
    firstName,
    email,
    phoneNumber,
    query,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact", error });
  }
};
