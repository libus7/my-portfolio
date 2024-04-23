import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew|Personal Portfolio",
  description: "Matthew is a full-stack developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative h-[4400px] pt-6 sm:pt-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      
 
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right"/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}