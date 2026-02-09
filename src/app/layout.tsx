import type { Metadata } from "next";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
        <div className="fixed inset-0 z-[-1]">
          <Grainient
            color1="#403c42"
            color2="#1b1f29"
            color3="#040404ff"
            timeSpeed={0.5}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={1}
            warpSpeed={1}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.5}
            rotationAmount={500}
            noiseScale={0.09}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={0.1}
            saturation={0.3}
            centerX={0}
            centerY={0}
            zoom={0.7}
          />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
