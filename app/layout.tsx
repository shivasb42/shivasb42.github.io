import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shivas Bhat — Software Engineer',
  description: 'Software Engineer specializing in DevOps, full-stack development, and machine learning. MS CS at NYU Courant.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
