import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Paulo Neves - IT Manager & Digital Transformation Leader",
  description: "Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation, team management, and product development.",
  keywords: "IT Manager, Digital Transformation, Product Development, Team Leadership, Software Development",
  authors: [{ name: "Paulo Neves" }],
  creator: "Paulo Neves",
  openGraph: {
    title: "Paulo Neves - IT Manager & Digital Transformation Leader",
    description: "Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation, team management, and product development.",
    url: "https://psneves.com.br",
    siteName: "Paulo Neves",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Neves - IT Manager & Digital Transformation Leader",
    description: "Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation, team management, and product development.",
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
