export const dynamic = "force-dynamic";

import { getCurrentUser } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function AdminPage() {
  const admin = await getCurrentUser();

  if (!admin) {
    return <h1>401 – Unauthorized</h1>;
  }

  await connectDB();
  const users = await User.find().select("-password");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user: any) => (
              <tr
                key={user._id.toString()}
                className="border-b border-gray-800"
              >
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>
                  <form action="/api/admin/set-role" method="POST">
                    <input
                      type="hidden"
                      name="userId"
                      value={user._id.toString()}
                    />
                    <select name="role" defaultValue={user.role}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button>Update</button>
                  </form>
                </td>

                <td>
                  <form action="/api/admin/delete-user" method="POST">
                    <input
                      type="hidden"
                      name="userId"
                      value={user._id.toString()}
                    />
                    <button className="text-red-500">Delete</button>
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