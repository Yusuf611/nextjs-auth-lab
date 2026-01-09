import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Signup request body:", body);

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const user = await User.create({ name, email, password });

    return NextResponse.json({
      message: "Signup successful",
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error: any) {
    console.error("❌ SIGNUP ERROR:", error);   // 👈 THIS WILL SHOW THE REAL CAUSE
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
