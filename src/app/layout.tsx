import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "@/components/ui/navbar/NavBar";
import styles from "./layout.module.css"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas DLF | Developer",
  description: "Bienvenido a mi página web. Mi nombre es Lucas, y soy desarrollador web. Avanti!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.container}>
          <NavBar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

