'use client'

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import KeyProjects from './components/KeyProjects'
import Experience from './components/Experience'
import Research from './components/Research'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-900 dark:to-dark-800">
      <Header />
      <Hero />
      <About />
      <KeyProjects />
      <Experience />
      <Research />
      <Publications />
      <Awards />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
} 