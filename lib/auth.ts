import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("session_user")?.value;

  if (!userId) return null;

  await connectDB();
  const user = await User.findById(userId).select("-password");

  return user;
}
