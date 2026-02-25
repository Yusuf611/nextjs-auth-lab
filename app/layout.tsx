import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth System",
  description: "Next.js Cookie Auth with RBAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}