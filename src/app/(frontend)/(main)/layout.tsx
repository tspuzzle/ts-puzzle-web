import React from 'react'
import '../styles.css'

import { Header } from '@/lib/shared/ui'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
