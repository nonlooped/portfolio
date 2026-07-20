import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { buildSiteJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

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

const { url, title, description, name, locale, twitter } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${name}`,
  },
  description,
  applicationName: name,
  authors: [{ name, url }],
  creator: name,
  publisher: name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url,
    siteName: `${name} Portfolio`,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: twitter.handle,
    creator: twitter.handle,
  },
  alternates: {
    canonical: url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
  verification: {
    google: "E3FZQanOYF_ixi6Bg6iS9AwDgJ6qhML9mDEAT9HWIrQ",
  },
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
  const jsonLd = buildSiteJsonLd();

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
