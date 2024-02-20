import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A VOZ DA COSTA",
  description: "A blog by Tatiana Da Costa",
  icons: {
    icon: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1692557787/cherry-blossom_zquyfz.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
