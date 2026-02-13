import transporter from "../config/mailer.js";

const sendContactEmails = async ({ name, email, company, message }) => {
  await Promise.all([
    // Email to company
    transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.COMPANY_EMAIL,
      subject: "New Contact Inquiry",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p>${message}</p>
      `,
    }),

    // Auto-reply to user
    transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: "We received your message",
      html: `
    <p>Dear ${name},</p>

    <p>Thank you for contacting <strong>Darvanta Technologies</strong>.</p>

    <p>We’ve received your message and will get back to you soon.</p>

    <p>If you wish to share any additional information, you may reply directly to this email.</p>

    <p>Sincerely,<br/>
    <strong>Darvanta Technologies</strong></p>
  `,
    }),
  ]);
};

export default sendContactEmails;
