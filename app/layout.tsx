import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

const TITLE = "Paulo Neves — Full Stack Engineering Manager"
const DESCRIPTION =
  "Full Stack Engineering Manager with 17 years in software and 3 leading engineering teams. Manages a mixed-seniority team at Johnson & Johnson, still designs and writes the systems, and runs a spec-driven agentic development workflow. Remote (Brazil) or São Paulo."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Engineering Manager, Full Stack Engineering Manager, Tech Manager, Hands-on Engineering Manager, TypeScript, Next.js, React Native, PostgreSQL, AI-assisted development, agentic development",
  authors: [{ name: "Paulo Neves" }],
  creator: "Paulo Neves",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://psneves.com.br",
    siteName: "Paulo Neves",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
