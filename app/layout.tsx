import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alegria - Cocktails & Grignotages",
  description:
    "Découvrez notre sélection de boissons, planches et burgers dans une ambiance unique.",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent /> 
      </body>
    </html>
  );
}
