import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://thelooped.tech";

const description =
  "Looped ships full-stack TypeScript products: live games, productivity apps, SDKs, and interfaces with performance and craft built in.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Looped | Full-Stack Developer & Digital Artist",
    template: "%s | Looped",
  },
  description,
  keywords: [
    "Looped",
    "Full-Stack Developer",
    "Portfolio",
    "TypeScript",
    "Next.js",
    "Creative Coder",
    "UI Engineering",
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
  openGraph: {
    title: "Looped | Full-Stack Developer & Digital Artist",
    description,
    url: siteUrl,
    siteName: "Looped Portfolio",
    images: [
      { url: "/logo.png", width: 500, height: 500, alt: "Looped logo" },
      { url: "/full.png", width: 1200, height: 630, alt: "Looped portfolio preview" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looped | Full-Stack Developer & Digital Artist",
    description,
    creator: "@nonlooped",
    images: ["https://thelooped.tech/full.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

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
        description,
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Looped",
        url: siteUrl,
        jobTitle: "Full-Stack Developer",
        description,
        sameAs: ["https://github.com/nonlooped", "https://x.com/nonlooped"],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${figtree.variable} ${jetbrainsMono.variable} antialiased`}
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
