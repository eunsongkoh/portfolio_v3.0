import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/layout/ParticleBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "song",
  description: "engineer, student, researcher",
  icons: {
    icon: "/song.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ParticleBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
