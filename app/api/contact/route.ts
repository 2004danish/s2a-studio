import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    // 1. Grab the data sent from the frontend form
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Save the lead to the Neon PostgreSQL Database using Prisma
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        message,
      },
    });

    // 4. Return a success message back to the frontend
    return NextResponse.json({ success: true, lead }, { status: 200 });
    
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}