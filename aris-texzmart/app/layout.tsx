
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400","600","700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","600","700"],
});

export const metadata: Metadata = {
  title: "Aris Texzmart - Quality Yarn & Fabrics",
  description: "Premium yarn, fabrics, and fibers for textile industry. Global trading company specializing in quality textile raw materials.",
  keywords: "yarn, fabrics, fibers, textile, quality materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
