import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taabo HDSS - Système de Surveillance Démographique et de Santé",
  description: "Site institutionnel du Taabo Health and Demographic Surveillance System (HDSS) - Côte d'Ivoire. Recherche sur les maladies infectieuses, non transmissibles et interventions de santé.",
  keywords: ["Taabo HDSS", "CSRS", "Côte d'Ivoire", "surveillance démographique", "recherche santé", "maladies infectieuses"],
  authors: [{ name: "Taabo HDSS" }],
  openGraph: {
    title: "Taabo HDSS - Côte d'Ivoire",
    description: "Système de Surveillance Démographique et de Santé de Taabo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
