import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Yadav - AI Researcher & ML Engineer',
  description: 'AI Researcher and ML Engineer with 3+ years of experience in federated learning, deep learning, and multi-agent systems. Published 5 peer-reviewed papers in top-tier conferences.',
  keywords: 'AI, Machine Learning, Federated Learning, Deep Learning, Multi-Agent Systems, Research, Krishna Yadav',
  authors: [{ name: 'Krishna Yadav' }],
  openGraph: {
    title: 'Krishna Yadav - AI Researcher & ML Engineer',
    description: 'AI Researcher and ML Engineer with expertise in federated learning and deep learning',
    type: 'website',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 