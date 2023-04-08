'use client'


import { ThemeProvider } from 'next-themes'
import { Montserrat as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
    </>
  )
}