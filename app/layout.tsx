import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono"
});

const siteUrl = "https://hussain-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hussain A | Full-Stack Developer",
    template: "%s | Hussain A"
  },
  description:
    "Portfolio of Hussain Ahmed (Hussain A), a MERN stack, Next.js, and React Native developer building modern full-stack digital products.",
  keywords: [
    "Hussain Ahmed",
    "Hussain A",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Native Developer"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hussain A | Full-Stack Developer",
    description:
      "Explore projects, skills, and experience of Hussain Ahmed - full-stack developer specialized in MERN, Next.js, and React Native.",
    siteName: "Hussain A Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hussain A Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain A | Full-Stack Developer",
    description: "MERN + Next.js + React Native developer portfolio.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", type: "image/png" }]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body bg-surface text-textMain antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
