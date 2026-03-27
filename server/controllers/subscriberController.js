import Subscriber from "../models/Subscriber.js";
import sendEmail from "../utils/sendEmail.js";

export const subscribeUser = async (req, res) => {
  try {
    const { email, name } = req.body || {};

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSubscriber = await Subscriber.create({ email, name });

    // Welcome email to subscriber
    const subscriberEmail = await sendEmail({
      to: email,
      subject: "Welcome to Proxion 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hello ${name || "there"},</h2>
          <p>Thanks for subscribing to <strong>Proxion</strong>!</p>
          <a href="https://proxion-zie7.vercel.app/" style="padding: 10px 20px; background-color: #00FFC3; color: black; border-radius: 6px; text-decoration: none;">Visit Proxion</a>
        </div>
      `,
    });

    // Admin notification
    const adminEmail = await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Subscriber 🚀",
      html: `<p>New subscriber joined:</p><ul><li>Email: ${email}</li><li>Name: ${name || "N/A"}</li></ul>`,
    });

    res.status(201).json({
      message: "Successfully subscribed & email sent 🎉",
      data: newSubscriber,
      emails: {
        subscriber: subscriberEmail ? "sent" : "failed",
        admin: adminEmail ? "sent" : "failed",
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};