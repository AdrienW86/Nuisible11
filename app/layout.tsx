import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Sticker from "@/components/Sticker";
import Footer from "@/components/Footer";
import GlobalContactForm from "@/components/GlobalContactForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuisible 11 | Dératisation et désinsectisation à Narbonne",
  description: "Expert en dératisation et lutte contre les nuisibles à Narbonne et ses environs. Intervention rapide 7j/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Sticker />
        {/* Le formulaire est maintenant géré dynamiquement par le pathname */}
        <GlobalContactForm />
        
        <Footer />
      </body>
    </html>
  );
}