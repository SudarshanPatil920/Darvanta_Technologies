import Contact from "../models/Contact.js";
import sendContactEmails from "../utils/sendContactEmails.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await Contact.create({ name, email, company, message });

    res.status(201).json({
      message: "Message submitted successfully",
    });

    sendContactEmails({ name, email, company, message })
      .catch(err => console.error("Email error:", err.message));

  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Server error" });
    }
    console.error(error);
  }
};

