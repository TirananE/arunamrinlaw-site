import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Preloader from "@/components/Preloader";
import NavBar from "@/components/NavBar";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aruna Mrinlaw - Law Firm | สำนักงานกฎหมายอรุณมรินทร์",
  description: "Professional law firm services | บริการทางกฎหมายมืออาชีพ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      </head>
      <body className={inter.variable}>
        <LanguageProvider>
          <Preloader />
          <NavBar />
          {children}
        </LanguageProvider>
        
        {/* Scripts */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/animation.js" strategy="afterInteractive" />
        <Script src="/assets/js/back-to-top-button.js" strategy="afterInteractive" />
        <Script src="/assets/js/contact-form.js" strategy="afterInteractive" />
        <Script src="/assets/js/contact-validate.js" strategy="afterInteractive" />
        <Script src="/assets/js/counter.js" strategy="afterInteractive" />
        
        {/* Initialize AOS */}
        <Script id="aos-init" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 1000,
                once: true,
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}