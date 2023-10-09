"use client"

import ThemeProvider from '@/styles/themeProvider';
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Генератор пароля',
  description: 'Генератор пароляя',
}

const inter = Inter({
  weight: ['400'],
  style: ['normal'],    
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="ru" className={inter.className}>
      <body style={{margin: 0, padding: 0}}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

