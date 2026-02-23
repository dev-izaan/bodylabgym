import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import Logo from "../components/Logo";
import ScrollHandler from "../components/ScrollHandler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteTitle = "Body Lab Gym | Premium Fitness Abu Dhabi";
const siteDescription = "Body Lab Gym - Abu Dhabi's premier destination for high-performance training. Expert coaches, top-tier equipment, and a results-driven environment. Open 5AM - 2AM.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: ["Gym Abu Dhabi", "Fitness Abu Dhabi", "Personal Training Abu Dhabi", "Body Lab Gym", "Musaffa Gym", "Elite Fitness UAE"],
  authors: [{ name: "Body Lab Gym" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://bodylabgym.ae",
    siteName: "Body Lab Gym",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Body Lab Gym Interior",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          <Navbar />
          <ScrollHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
