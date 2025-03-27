"use client"; // Only needed if using hooks inside this file
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-container">
      <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> {/* Ensure children are inside <main> */}
        <Footer />
      </body>
      </html>
    </div>
  );
}
