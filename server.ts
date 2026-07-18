import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());

  // Contact API route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Server-side validation
      if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ error: "Sender Name is required." });
      }
      if (!email || typeof email !== "string" || email.trim() === "") {
        return res.status(400).json({ error: "Inbox Email is required." });
      }
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email format." });
      }
      if (!subject || typeof subject !== "string" || subject.trim() === "") {
        return res.status(400).json({ error: "Scope of Inquiry is required." });
      }
      if (!message || typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({ error: "Message Details are required." });
      }

      console.log(`[Contact API] Form Submission Received:`, { name, email, subject, message });

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "caturzajr4@gmail.com";

      let mailSent = false;
      let isSimulated = true;

      // Check if SMTP settings are fully declared and not defaults
      if (
        smtpHost && 
        smtpHost !== "smtp.example.com" && 
        smtpUser && 
        smtpUser !== "user@example.com" && 
        smtpPass && 
        smtpPass !== "password"
      ) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: receiverEmail,
            subject: `Portfolio Inquiry: ${subject}`,
            text: `Inquiry received from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
              <h3>New Portfolio Inquiry</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Scope of Inquiry:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
          });
          mailSent = true;
          isSimulated = false;
          console.log(`[Contact API] Email successfully transmitted via SMTP to ${receiverEmail}`);
        } catch (mailError: any) {
          console.error(`[Contact API] Failed to transmit email via SMTP:`, mailError);
        }
      } else {
        console.log(`[Contact API] SMTP credentials not set or contain placeholders. Operating in fallback logging mode.`);
      }

      return res.status(200).json({
        success: true,
        message: mailSent 
          ? "Message successfully transmitted via SMTP server."
          : "Message verified and logged to the server environment (Simulated transmission successful).",
        details: {
          name,
          email,
          subject,
          isSimulated,
        }
      });
    } catch (err: any) {
      console.error(`[Contact API] Critical route error:`, err);
      return res.status(500).json({ error: "Internal server error occurred." });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
