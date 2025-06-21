'use client'

import React from 'react'
import { Heart, Github, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const github = 'https://github.com/krishnaAiGen'
  const googleScholar = 'https://scholar.google.com/citations?user=y6-LtiIAAAAJ'

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Krishna Yadav</h3>
            <p className="text-gray-300 leading-relaxed">
              AI Researcher and ML Engineer passionate about advancing federated learning, 
              deep learning, and multi-agent systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#research" className="text-gray-300 hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#publications" className="text-gray-300 hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>© {currentYear} Krishna Yadav. Made with</span>
            <Heart className="mx-2 text-red-500" size={16} />
            <span>and lots of coffee</span>
          </div>
          <div className="text-gray-400 text-sm">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 