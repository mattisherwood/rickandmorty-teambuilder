import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header/Header"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "../styles/globals.css"
import "../styles/structure.css"
import "../styles/typography.css"
import "../styles/variables.css"

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Rick and Morty Team Builder",
  description:
    "A quick technical excercise in react, NextJS, typescript, CSS modules & GraphQL by Matt Isherwood",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={notoSans.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
