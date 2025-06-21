'use client'

import React from 'react'
import { Github, Mail, Phone, MapPin, ExternalLink, FileText } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const email = 'krishna.nitkkr1@gmail.com'
  const phone = process.env.NEXT_PUBLIC_PHONE
  const location = process.env.NEXT_PUBLIC_LOCATION
  const github = 'https://github.com/krishnaAiGen'
  const googleScholar = 'https://scholar.google.com/citations?user=y6-LtiIAAAAJ'
  const resumeLink = "https://drive.google.com/file/d/1gRmvZ4FAUBxTI8S8JmyTvEz4-i0sAlGn/view?usp=sharing"

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-600 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Krishna Yadav"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E"
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Krishna Yadav
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-8">
            AI Researcher & ML Engineer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI Researcher and ML Engineer with 3+ years of experience in federated learning, 
            deep learning, and multi-agent systems. Published 5 peer-reviewed papers in top-tier 
            conferences (ICDM, AAAI, INFOCOM) with 400+ citations.
          </p>
        </div>

        <div className="animate-slide-up flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
          >
            <FileText className="mr-2" size={20} />
            View Resume
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium"
          >
            <Github className="mr-2" size={20} />
            View GitHub
          </a>
          <a
            href={googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ExternalLink className="mr-2" size={20} />
            Google Scholar
          </a>
        </div>

        <div className="animate-slide-up flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Phone className="mr-2" size={18} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" size={18} />
            <span>{email}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" size={18} />
            <span>{location}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 