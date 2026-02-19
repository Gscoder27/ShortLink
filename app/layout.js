import { Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dancing Script font configuration (for Navbar)
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Nunito font configuration (SN Pro alternative - for rest of the app)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "ShortLink - Your trusted URL Shortener",
  description: "Shortlink is a URL shortener web application. It allows users to shorten long URLs and track the number of clicks on each shortened URL.",
  icons: {
    icon: "/shortLinkfavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${nunito.variable} antialiased bg-purple-50 flex flex-col min-h-screen`}
        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
      >
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
