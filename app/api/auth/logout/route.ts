import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/login", "http://localhost:3000"));

  res.cookies.set({
    name: "session_user",
    value: "",
    maxAge: 0,
    path: "/",
  });

  return res;
}
