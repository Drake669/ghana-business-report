import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { to, subject, text, html, attachments } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify the connection configuration before sending
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    const mailOptions = {
      from: `"This Is Ghana" <${process.env.GMAIL_USER}>`,
      to: to,
      subject: subject,
      text: text,
      html: html,
      ...(attachments && attachments.length > 0 && { attachments }),
    };

    // Send the email and wait for completion
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
