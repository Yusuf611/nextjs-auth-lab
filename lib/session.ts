import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export type SessionData = {
  userId?: string;
  role?: "user" | "admin";
};

export const sessionOptions = {
  password: process.env.SESSION_PASSWORD!,
  cookieName: "next-auth-rbac-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
  },
};

export async function getSession() {
  const cookieStore = await cookies();

  const session = await getIronSession<SessionData>(
    {
      get: (key: string) => cookieStore.get(key)?.value,
      set: () => {},       // not used for writes here
      remove: () => {},
    } as any,
    sessionOptions
  );

  return session;
}
