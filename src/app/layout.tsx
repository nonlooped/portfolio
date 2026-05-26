import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://thelooped.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Looped | Full-Stack Developer & Creative Artist",
    template: "%s | Looped",
  },
  description:
    "Looped is a full-stack developer and digital artist passionate about building seamless user experiences, interactive web apps, and creative interfaces.",
  keywords: [
    "Looped",
    "Full-Stack Developer",
    "Portfolio",
    "Software Engineer",
    "Creative Coder",
    "UI/UX",
    "Next.js",
    "React",
    "TailwindCSS",
    "Open Source",
  ],
  authors: [{ name: "Looped", url: siteUrl }],
  creator: "Looped",
  publisher: "Looped",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  openGraph: {
    title: "Looped | Full-Stack Developer & Creative Artist",
    description:
      "Portfolio of Looped - a full-stack developer and digital artist building creative interfaces and seamless user experiences.",
    url: siteUrl,
    siteName: "Looped Portfolio",
    images: [
      { url: "/logo.png", width: 500, height: 500, alt: "Looped Logo" },
      { url: "/full.png", width: 1200, height: 630, alt: "Looped Full Preview" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looped | Full-Stack Developer & Creative Artist",
    description:
      "My Portfolio - Looped - full-stack developer and digital artist building seamless user experiences.",
    creator: "@nonlooped",
    images: ["https://thelooped.tech/full.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Looped Portfolio",
        description: "Full-stack developer and creative artist portfolio.",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Looped",
        url: siteUrl,
        jobTitle: "Full-Stack Developer",
        description: "Full-stack developer and digital artist building creative interfaces and seamless user experiences.",
        sameAs: [
          "https://twitter.com/nonlooped",
          "https://github.com/nonlooped",
          "https://x.com/nonlooped",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
