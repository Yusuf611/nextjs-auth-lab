import "./globals.css";

export const metadata = {
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
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </div>
      </body>
    </html>
  );
}
