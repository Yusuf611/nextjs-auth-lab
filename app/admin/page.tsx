export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function AdminPage() {
  const admin = await getCurrentUser();
  if (!admin) redirect("/login");
  if (admin.role !== "admin") redirect("/dashboard");

  await connectDB();
  const users = await User.find().select("-password");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>

        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Change Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user._id} className="border-b border-gray-800">
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.role}</td>
                <td className="py-2">
                  <form action="/api/admin/set-role" method="POST">
                    <input type="hidden" name="userId" value={user._id} />
                    <select name="role" defaultValue={user.role} className="bg-gray-800 border border-gray-700 rounded px-2 py-1">
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button className="ml-2 bg-blue-600 px-3 py-1 rounded">
                      Update
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
