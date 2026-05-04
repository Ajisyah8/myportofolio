import nodemailer from "nodemailer";
import { about } from "@/data/data";

const requiredEnvVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO_EMAIL",
];

function hasRequiredEnv() {
    return requiredEnvVars.every((key) => process.env[key]);
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function createTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res
            .status(405)
            .json({ message: "Method not allowed. Use POST." });
    }

    try {
        if (!hasRequiredEnv()) {
            return res.status(500).json({
                message:
                    "Email service is not configured yet. Add the SMTP environment variables first.",
            });
        }

        const { name, email, message } = req.body || {};

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return res.status(400).json({
                message: "Name, email, and message are required.",
            });
        }

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();
        const transporter = createTransporter();
        const recipient = process.env.CONTACT_TO_EMAIL;
        const sender =
            process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

        await transporter.sendMail({
            from: `"${about.name} Portfolio" <${sender}>`,
            to: recipient,
            replyTo: trimmedEmail,
            subject: `Portfolio contact from ${trimmedName}`,
            text: [
                `Name: ${trimmedName}`,
                `Email: ${trimmedEmail}`,
                "",
                "Message:",
                trimmedMessage,
            ].join("\n"),
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17212d;">
                    <h2 style="margin-bottom: 16px;">New portfolio contact</h2>
                    <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
                </div>
            `,
        });

        return res.status(200).json({
            message: "Your message has been sent successfully.",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return res.status(500).json({
            message: "Failed to send the message. Please try again later.",
        });
    }
}
