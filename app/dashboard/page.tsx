export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Dashboard() {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <div className="space-y-8">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back, <span className="text-white font-semibold">{user.email}</span></p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
          <p className="text-gray-400">Role: <span className="text-white">{user.role}</span></p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">🔐 Security</h2>
          <p className="text-gray-400">Session-based authentication enabled</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-2">⚡ Status</h2>
          <p className="text-green-400 font-medium">Logged in</p>
        </div>
      </div>

      <form action="/api/auth/logout" method="POST">
        <LogoutButton />
      </form>
    </div>
  );
}
