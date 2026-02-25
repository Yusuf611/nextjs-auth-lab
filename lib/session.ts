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
  sameSite: "none",
  secure: true,
  path: "/",
},
};

export async function getSession() {
  const cookieStore = await cookies();

  const session = await getIronSession<SessionData>(
    {
      get: (key: string) => cookieStore.get(key)?.value,
      set: () => {},
      remove: () => {},
    } as any,
    sessionOptions
  );

  return session;
}