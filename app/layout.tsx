import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ProfileProvider } from "@/components/profile-context" // import ProfileProvider
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sara Choque | Portfolio",
  description: "Personal portfolio of Sara Choque, Mechatronics Engineer specializing in Biomedical Systems and Robotics.",
  generator: "v0.app",
  icons: {
    icon: "/SC-icon.jpg",
    apple: "/SC-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ProfileProvider>
          {" "}
          {/* wrap app in ProfileProvider */}
          {children}
        </ProfileProvider>
        <Analytics />
      </body>
    </html>
  )
}
