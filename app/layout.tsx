import './globals.css'
import type { Metadata } from 'next'
import { Inter, Staatliches } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const staat = Staatliches({weight:["400"],display:"swap",subsets:['latin'],variable:"--font-staat"})

export const metadata: Metadata = {
  title: 'Zulqarnain Haider | Web Developer',
  description: 'web developer | designer | gamer',
  themeColor:'#1d4ed8'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${staat.variable}`}>{children}</body>
    </html>
  )
}
