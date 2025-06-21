'use client'

import React from 'react'
import { Mail, Phone, MapPin, Github, ExternalLink, Send } from 'lucide-react'

const Contact = () => {
  const email = 'krishna.nitkkr1@gmail.com'
  const phone = process.env.NEXT_PUBLIC_PHONE
  const location = process.env.NEXT_PUBLIC_LOCATION
  const github = 'https://github.com/krishnaAiGen'
  const googleScholar = 'https://scholar.google.com/citations?user=y6-LtiIAAAAJ'
  const linkedin = 'https://www.linkedin.com/in/krishna-yadav-434324192/'

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: location,
      color: 'text-red-600 dark:text-red-400'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: github,
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Google Scholar',
      icon: ExternalLink,
      href: googleScholar,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'LinkedIn',
      icon: ExternalLink,
      href: linkedin,
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's collaborate on cutting-edge AI research or discuss exciting opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800`}>
                      <info.icon className={info.color} size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg ${social.color} text-white flex items-center justify-center transition-colors duration-200`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-dark-700 dark:text-white transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 