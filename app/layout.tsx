import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top" // Import the new component
// Import the new components
import { CallWhatsAppButtons } from "@/components/call-whatsapp-buttons"
import { ChatbotButton } from "@/components/chatbot-button"
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Santhosh Kumar ayurveda and panchakarma center",
  description: "Authentic Ayurvedic healing for chronic conditions in Raichur, Karnataka.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ScrollToTop /> {/* Add the ScrollToTop component here */}
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CallWhatsAppButtons />
            <ChatbotButton />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
