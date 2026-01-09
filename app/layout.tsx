import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monish V | GenAI & Full-Stack Engineer",
  description:
    "Professional portfolio of Monish V, a Computer Science student specializing in Generative AI, LLMs, and Full-Stack Development. Showcasing AI projects, skills, and achievements.",
  generator: "v0.app",
  keywords: ["Monish V", "GenAI", "Full-Stack Developer", "LLM", "React", "Next.js", "AI Engineer"],
  authors: [{ name: "Monish V" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monish.dev",
    title: "Monish V | GenAI & Full-Stack Engineer",
    description: "Professional portfolio showcasing GenAI projects and full-stack development expertise.",
    images: [
      {
        url: "https://monish.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monish V Portfolio",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1E293B" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
