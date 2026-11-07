import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highland Holiday Lighting | Premier Estate Christmas Light Displays",
  description:
    "Turn your home into a holiday masterpiece without touching a ladder. Commercial-grade LEDs custom-measured to your roofline, full season maintenance, and January storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
