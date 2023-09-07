import './globals.css'
import type { Metadata } from 'next'
import { Phudu } from "next/font/google";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";

const font = Phudu({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Commerce-Kampmann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col min-h-screen`}>
        <NavBar></NavBar>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  ) 
}
