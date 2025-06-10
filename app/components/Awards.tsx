'use client'

import React, { useState } from 'react'
import { Award, ExternalLink, Calendar, Trophy, X } from 'lucide-react'
import Image from 'next/image'

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null)

  const awards = [
    {
      title: 'Session Chair - INFOCOM IEILM Workshop 2025',
      description: 'Served as session chair for federated learning and edge intelligence track',
      year: '2025',
      type: 'Academic Leadership',
      link: process.env.NEXT_PUBLIC_INFOCOM_SESSION_CHAIR,
      image: '/images/infocom-chair.jpg',
      imageAlt: 'INFOCOM 2025 Workshop Session Chair'
    },
    {
      title: 'Honourable Mention - Solana and Crossmint Hackathon',
      description: 'Awarded for developing MCP server during hackathon',
      year: '2024',
      type: 'Hackathon',
      link: process.env.NEXT_PUBLIC_SOLANA_HACKATHON,
      tweetLink: 'https://x.com/joi_n9911/status/1900967070260396313'
    },
    {
      title: 'Multi-Agent Delegation System Award',
      description: 'Awarded USD 5,000 for developing autonomous delegation system',
      year: '2024',
      type: 'Innovation',
      amount: '$5,000'
    },
    {
      title: 'Best Use of AI Technology - IREC Awards 2024',
      description: 'Awarded for developing advanced AI solutions at Zyod that transformed e-commerce product discovery',
      year: '2024',
      type: 'Industry Recognition',
      link: process.env.NEXT_PUBLIC_IREC_AWARDS,
      image: '/images/irec-award.jpg',
      imageAlt: 'IREC Awards 2024 - Best Use of AI Technology'
    },
    {
      title: 'First Student Publication Recognition',
      description: 'Honored by NIT Kurukshetra Computer Engineering department for being the first student from 2018-2022 batch to publish a peer-reviewed journal paper indexed in SCI',
      year: '2021',
      type: 'Academic Achievement'
    }
  ]

  const openModal = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="awards" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Honors & Awards
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in research, innovation, and leadership
          </p>
        </div>

        <div className="grid gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex items-start space-x-4 mb-4 md:mb-0 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {award.title}
                      </h3>
                      {award.link && (
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex-shrink-0 mt-1"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {award.description}
                    </p>
                    
                    {/* Award Image - Now Clickable */}
                    {award.image && (
                      <div 
                        className="w-48 h-48 relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 bg-white cursor-pointer hover:border-primary-400 transition-colors duration-200"
                        onClick={() => openModal(award.image!, award.imageAlt || award.title)}
                      >
                        <Image
                          src={award.image}
                          alt={award.imageAlt || award.title}
                          fill
                          className="object-contain p-2 hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                          <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-gray-800 rounded-full p-2">
                            <ExternalLink size={16} className="text-gray-600 dark:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tweet Embed for Solana Award */}
                    {award.tweetLink && (
                      <div className="mb-4">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border">
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            🐦 Featured Tweet:
                          </p>
                          <a
                            href={award.tweetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                          >
                            View Solana MCP Tweet with Video →
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-primary-600 dark:text-primary-400">
                        <Calendar className="mr-1" size={14} />
                        <span>{award.year}</span>
                      </div>
                      {award.amount && (
                        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <Award className="mr-1" size={14} />
                          <span>{award.amount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  award.type === 'Academic Leadership' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : award.type === 'Hackathon'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    : award.type === 'Innovation'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : award.type === 'Industry Recognition'
                    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {award.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Summary */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-yellow-600 dark:text-yellow-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</h4>
              <p className="text-gray-600 dark:text-gray-300">Awards Received</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$5K</h4>
              <p className="text-gray-600 dark:text-gray-300">Prize Money</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2025</h4>
              <p className="text-gray-600 dark:text-gray-300">Session Chair</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">First</h4>
              <p className="text-gray-600 dark:text-gray-300">Student Publication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
            <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain p-4"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Awards 