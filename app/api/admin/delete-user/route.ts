import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const admin = await getCurrentUser();

    // 🔐 Auth check
    if (!admin || admin.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const userId = formData.get("userId") as string;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID required" },
        { status: 400 }
      );
    }

    // ❌ Prevent admin deleting themselves
    if (admin._id.toString() === userId) {
      return NextResponse.json(
        { error: "Admin cannot delete themselves" },
        { status: 400 }
      );
    }

    await connectDB();
    await User.findByIdAndDelete(userId);

    return NextResponse.redirect(new URL("/admin", req.url));
  } catch (err) {
    console.error("DELETE USER ERROR:", err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
