"use client";

export default function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login"; // 👈 redirect after logout
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}
