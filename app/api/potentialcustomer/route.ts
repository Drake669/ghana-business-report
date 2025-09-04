import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { phone, email, slug } = await req.json();

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Phone or email is required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingPotentialCustomer = await db.potentialCustomer.findFirst({
      where: {
        OR: [{ email: email || undefined }, { phone: phone || undefined }],
      },
    });

    if (existingPotentialCustomer) {
      return NextResponse.json(
        {
          message: "You're already on the waitlist!",
          existing: true,
        },
        { status: 200 }
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const emailContent = {
        to: email,
        subject: "You are on the waitlist for the SME Report",
        text: `Hello,

Thank you for signing up for the SME Report. We have received your details and you are now on the waitlist.

You will be among the first to know as soon as the report is ready. Stay tuned for updates.

Best regards,
The Built Team`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="cid:logo" alt="Built Team Logo" style="max-width: 150px; height: auto;" />
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hello,</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for signing up for the SME Report. We have received your details and you are now on the waitlist.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              You will be among the first to know as soon as the report is ready. Stay tuned for updates.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              The Built Team
            </p>
          </div>
        `,
      };

      await transporter.sendMail({
        from: `"Built Team" <${process.env.GMAIL_USER}>`,
        to: emailContent.to,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
        attachments: [
          {
            filename: "logo.png",
            path: "./public/logo.png", // Path to your logo
            cid: "logo", // Content ID for referencing in HTML
          },
        ],
      });

      const createPotentialCustomer = await db.potentialCustomer.create({
        data: {
          phone,
          email,
          slug,
        },
      });

      return NextResponse.json(
        {
          message: "Successfully joined waitlist and welcome email sent!",
          customer: createPotentialCustomer,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return NextResponse.json(
        {
          error:
            "Failed to send welcome email. Please check your email address and try again.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("[createPotentialCustomer]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
