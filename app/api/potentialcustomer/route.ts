import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: Request) {
  try {
    const { phone = "", email, slug } = await req.json();

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Phone or email is required" },
        { status: 400 }
      );
    }

    const existingPotentialCustomer = await db.potentialCustomer.findFirst({
      where: {
        OR: [{ email: email || undefined }, { phone: phone || undefined }],
      },
    });

    if (existingPotentialCustomer) {
      // Check if the customer has already received the report
      if (existingPotentialCustomer.hasReceivedReport) {
        return NextResponse.json(
          {
            message: "You have already been emailed the report!",
            existing: true,
          },
          { status: 200 }
        );
      }

      // Customer exists but hasn't received the report yet - send email and update flag
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
          subject: "Thank you for your interest in the SME Report",
          text: `Hello there,

Thank you for your interest in the SME Report.
We hope you find the insights useful in helping you understand, start and grow your business. At Built, we are committed to supporting SMEs with the tools and resources they need to thrive.

If you have any questions or would like to learn more about how Built can support your business, feel free to reach out.

Thank you for your interest in our SME insights.`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <img src="cid:logo" alt="Built Team Logo" style="max-width: 150px; height: auto;" />
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Hello there,
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Thank you for your interest in the SME Report.
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                We hope you find the insights useful in helping you understand, start and grow your business. At Built, we are committed to supporting SMEs with the tools and resources they need to thrive.
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                If you have any questions or would like to learn more about how Built can support your business, feel free to reach out.
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
                Thank you for your interest in our SME insights.
              </p>
              
              <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <img src="cid:footer" alt="Footer" style="max-width: 100%; height: auto;" />
                
                <!-- Footer Content -->
                <div style="padding: 20px 0; text-align: center;">
                  <p style="color: #64748b; font-size: 14px; margin: 0 0 15px 0; text-align: center;">
                    Copyright © 2025 Built Financial Technologies.
                  </p>
                  
              <div style="text-align: center; margin-bottom: 20px;">
                    <a href="https://facebook.com/builtaccounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                      <img src="cid:facebook" alt="Facebook" style="width: 24px; height: 24px;" />
                    </a>
                    
                    <a href="https://x.com/built_africa" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                      <img src="cid:twitter" alt="X (Twitter)" style="width: 24px; height: 24px;" />
                    </a>
                    
                    <a href="https://instagram.com/builtaccounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                      <img src="cid:instagram" alt="Instagram" style="width: 24px; height: 24px;" />
                    </a>
                    
                    <a href="https://linkedin.com/company/built-accounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                      <img src="cid:linkedin" alt="LinkedIn" style="width: 24px; height: 24px;" />
                    </a>
                  </div>
                </div>
              </div>
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
              path: path.join(process.cwd(), "public", "logo.png"),
              cid: "logo",
            },
            {
              filename: "footer.png",
              path: path.join(process.cwd(), "public", "footer.png"),
              cid: "footer",
            },
            {
              filename: "facebook.png",
              path: path.join(process.cwd(), "public", "facebook.png"),
              cid: "facebook",
            },
            {
              filename: "twitter.png",
              path: path.join(process.cwd(), "public", "twitter.png"),
              cid: "twitter",
            },
            {
              filename: "instagram.png",
              path: path.join(process.cwd(), "public", "instagram.png"),
              cid: "instagram",
            },
            {
              filename: "linked.png",
              path: path.join(process.cwd(), "public", "linked.png"),
              cid: "linkedin",
            },
          ],
        });

        // Update the customer to mark that they have received the report
        await db.potentialCustomer.update({
          where: { id: existingPotentialCustomer.id },
          data: { hasReceivedReport: true },
        });

        return NextResponse.json(
          {
            message:
              "Thank you for your interest! We have sent you a confirmation email.",
            existing: true,
          },
          { status: 200 }
        );
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        return NextResponse.json(
          {
            error:
              "Failed to send the report email. Please check your email address and try again.",
          },
          { status: 400 }
        );
      }
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
        subject: "Thank you for your interest in the SME Report",
        text: `Hello there,

Thank you for your interest in the SME Report.
We hope you find the insights useful in helping you understand, start and grow your business. At Built, we are committed to supporting SMEs with the tools and resources they need to thrive.

If you have any questions or would like to learn more about how Built can support your business, feel free to reach out.

Thank you for your interest in our SME insights.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="cid:logo" alt="Built Team Logo" style="max-width: 150px; height: auto;" />
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Hello there,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in the SME Report.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              We hope you find the insights useful in helping you understand, start and grow your business. At Built, we are committed to supporting SMEs with the tools and resources they need to thrive.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              If you have any questions or would like to learn more about how Built can support your business, feel free to reach out.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
              Please find the SME Report attached.
            </p>
            
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
              <img src="cid:footer" alt="Footer" style="max-width: 100%; height: auto;" />
              
              <!-- Footer Content -->
              <div style="padding: 20px 0; text-align: center;">
                <p style="color: #64748b; font-size: 14px; margin: 0 0 15px 0; text-align: center;">
                  Copyright © 2025 Built Financial Technologies.
                </p>
                
            <div style="text-align: center; margin-bottom: 20px;">
                  <a href="https://facebook.com/builtaccounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <img src="cid:facebook" alt="Facebook" style="width: 24px; height: 24px;" />
                  </a>
                  
                  <a href="https://x.com/built_africa" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <img src="cid:twitter" alt="X (Twitter)" style="width: 24px; height: 24px;" />
                  </a>
                  
                  <a href="https://instagram.com/builtaccounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <img src="cid:instagram" alt="Instagram" style="width: 24px; height: 24px;" />
                  </a>
                  
                  <a href="https://linkedin.com/company/built-accounting" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                    <img src="cid:linkedin" alt="LinkedIn" style="width: 24px; height: 24px;" />
                  </a>
                </div>
              </div>
            </div>
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
            path: path.join(process.cwd(), "public", "logo.png"),
            cid: "logo",
          },
          {
            filename: "footer.png",
            path: path.join(process.cwd(), "public", "footer.png"),
            cid: "footer",
          },
          {
            filename: "facebook.png",
            path: path.join(process.cwd(), "public", "facebook.png"),
            cid: "facebook",
          },
          {
            filename: "twitter.png",
            path: path.join(process.cwd(), "public", "twitter.png"),
            cid: "twitter",
          },
          {
            filename: "instagram.png",
            path: path.join(process.cwd(), "public", "instagram.png"),
            cid: "instagram",
          },
          {
            filename: "linked.png",
            path: path.join(process.cwd(), "public", "linked.png"),
            cid: "linkedin",
          },
        ],
      });

      const createPotentialCustomer = await db.potentialCustomer.create({
        data: {
          phone,
          email,
          slug,
          hasReceivedReport: true,
        },
      });

      return NextResponse.json(
        {
          message:
            "Thank you for your interest! We have sent you a confirmation email.",
          customer: createPotentialCustomer,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return NextResponse.json(
        {
          error:
            "Failed to send the report email. Please check your email address and try again.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("[createPotentialCustomer]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
