import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const admin = await getCurrentUser();
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { userId, role } = await req.json();

    if (!["user", "admin"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    await connectDB();
    await User.findByIdAndUpdate(userId, { role });

    return NextResponse.json({ message: "Role updated successfully" });
  } catch (error) {
    console.error("SET ROLE ERROR:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
