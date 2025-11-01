import mongoose from "mongoose";

// Define a schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  query: { type: String, required: true },
});

// Define a model
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
