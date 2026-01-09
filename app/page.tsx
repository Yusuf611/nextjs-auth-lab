import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <h1 className="text-5xl font-bold">🔐 Secure Auth System</h1>
      <p className="text-gray-400 max-w-xl">
        Cookie-based authentication with Role-Based Access Control (RBAC) using Next.js.
      </p>

      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-lg font-semibold">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-gray-700 hover:bg-gray-600 transition px-6 py-2 rounded-lg font-semibold">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
