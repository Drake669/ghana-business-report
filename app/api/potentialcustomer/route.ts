import { db } from "@/lib/db";
import { NextResponse } from "next/server";

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
      return NextResponse.json(
        {
          message: "Customer data saved successfully!",
          existing: true,
        },
        { status: 200 }
      );
    }

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
        message: "Customer data saved successfully!",
        customer: createPotentialCustomer,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[createPotentialCustomer]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
