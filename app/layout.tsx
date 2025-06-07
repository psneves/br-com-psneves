import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata = {
  title: "Paulo Neves - IT Manager",
  description:
    "Paulo Neves - IT Manager at Johnson & Johnson with 15+ years of experience in Information Technology, specializing in digital transformation and team leadership.",
  keywords:
    "Paulo Neves, IT Manager, Johnson & Johnson, Software Developer, Information Security, Digital Transformation, Team Leadership",
  authors: [{ name: "Paulo Neves" }],
  creator: "Paulo Neves",
  openGraph: {
    title: "Paulo Neves - IT Manager",
    description: "IT Manager at Johnson & Johnson with 15+ years of experience in Information Technology",
    url: "https://psneves.com.br",
    siteName: "Paulo Neves",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
