import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumank Inc. | Leading HVAC and Construction Services in Washington",
  description: "Lumank Inc. is a Washington State licensed general contractor specializing in HVAC, weatherization, deconstruction, and general contracting services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{margin:0, padding:0, background:'#fff'}}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
