import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alegria - Cocktails & Ambiance",
  description:
    "Découvrez notre sélection de boissons, planches et burgers dans une ambiance unique.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
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
