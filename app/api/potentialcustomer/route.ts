import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phone, email, slug } = await req.json();

    if (phone || email) {
      const existingPotentialCustomer = await db.potentialCustomer.findFirst({
        where: {
          email,
          phone,
        },
      });

      if (existingPotentialCustomer) {
        return NextResponse.json(existingPotentialCustomer, { status: 200 });
      }
    }

    const createPotentialCustomer = await db.potentialCustomer.create({
      data: {
        phone,
        email,
        slug,
      },
    });

    return NextResponse.json(createPotentialCustomer, { status: 200 });
  } catch (error) {
    console.error("[createPotentialCustomer]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
