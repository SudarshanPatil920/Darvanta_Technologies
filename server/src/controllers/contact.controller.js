import Contact from "../models/Contact.js";
import { emailApi } from "../config/brevo.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      name,
      email,
      company,
      message
    });

    // 2️⃣ Send email to company
    const companyEmailResponse = await emailApi.sendTransacEmail({
      sender: {
        name: "Darvanta Technologies",
        email: process.env.COMPANY_EMAIL
      },
      to: [{ email: process.env.COMPANY_EMAIL }],
      subject: "New Contact Inquiry",
      htmlContent: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p>${message}</p>
      `
    });

    // 3️⃣ Send confirmation to user
    const userEmailResponse = await emailApi.sendTransacEmail({
      sender: {
        name: "Darvanta Technologies",
        email: process.env.COMPANY_EMAIL
      },
      to: [{ email }],
      subject: "We received your inquiry",
      htmlContent: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting Darvanta Technologies.</p>
        <p>Our team will reach out shortly.</p>
        <br/>
        <p>Regards,<br/>Darvanta Team</p>
      `
    });

    // 4️⃣ Success ONLY if both DB + email worked
    return res.status(201).json({
      message: "Inquiry submitted and email sent successfully"
    });

  } catch (error) {
    console.error("CONTACT ERROR:", error?.response?.body || error.message);

    return res.status(500).json({
      message: "Inquiry saved but email sending failed",
      error: error?.response?.body || error.message
    });
  }
};
