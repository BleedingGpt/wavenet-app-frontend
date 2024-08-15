import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaveNet",
  description: "This website is a platform for internet services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>  
      <div className="min-h-screen">
        {children}
      </div>
      <Footer/>
      </body>
    </html>
  );
}
