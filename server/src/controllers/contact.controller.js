import Contact from "../models/Contact.js";
import sendContactEmails from "../utils/sendContactEmails.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Save to DB
    await Contact.create({ name, email, company, message });

    // ✅ Respond immediately (FAST UX)
    res.status(201).json({
      message: "Message submitted successfully",
    });

    // ✅ Send emails in background (Brevo API)
    sendContactEmails({ name, email, company, message })
      .catch(err => console.error("Email error:", err));

  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Server error" });
    }
  }
};
