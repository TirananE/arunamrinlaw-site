import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Preloader from "@/components/Preloader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aruna Mrinlaw - Law Firm",
  description: "Professional law firm services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      </head>
      <body className={inter.variable}>
        <Preloader />
        {children}
        
        {/* Scripts */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/assets/js/carousel.js" strategy="afterInteractive" />
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