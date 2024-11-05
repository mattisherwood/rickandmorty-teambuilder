import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header/Header"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "../styles/globals.css"
import "../styles/stars.css"
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
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicons/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicons/favicon.svg' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
      </head>
      <body className={notoSans.variable}>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
