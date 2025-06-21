'use client'

import React from 'react'
import { ExternalLink, Calendar, Users, Award, FileText } from 'lucide-react'
import Image from 'next/image'

const Publications = () => {
  const publications = [
    {
      title: 'Enhancing IoT Intrusion Detection through Vertical Federated Learning and Latent Space Mapping',
      authors: 'Krishna Yadav, Harshit Chaubey, Rajesh Sah',
      venue: 'ml4cyber at IEEE ICDM 2024',
      year: '2024',
      type: 'Conference',
      status: 'Published',
      link: 'https://drive.google.com/file/d/1b29dKCIKXatC_QlWFad-4MbGxDO1Wo-f/view'
    },
    {
      title: 'Federated Unlearning via Subparameter Space Partitioning and Selective Freezing',
      authors: 'Krishna Yadav, Varala Nandu Swapnik, Kwok Tai Chui, Brij Bhooshan Gupta',
      venue: 'DATASAFE workshop at AAAI 2025',
      year: '2025',
      type: 'Workshop',
      status: 'Published',
      link: 'https://drive.google.com/file/d/1Rsh1eHz13WJzgyXGdbozvOleJQD1m4Az/view'
    },
    {
      title: 'Overcoming Data Skew: Adaptive Federated Reparameterization in Edge Intelligence',
      authors: 'Krishna Yadav, Varala Nandu Swapnik, Dhruv Chawla, et al.',
      venue: 'INFOCOM IEILM 2025',
      year: '2025',
      type: 'Conference',
      status: 'Published',
      link: 'https://drive.google.com/file/d/1iZ1x_F4uB-7BasyZYrpNIFwKCrztsbJv/view'
    },
    {
      title: 'A Novel Data Poisoning Attack in Federated Learning based on Inverted Loss Function',
      authors: 'Gupta, Prajjwal, Krishna Yadav, Brij B. Gupta, et al.',
      venue: 'Computers & Security 130 (2023): 103270',
      year: '2023',
      type: 'Journal',
      status: 'Published',
      impactFactor: '5.6',
      link: process.env.NEXT_PUBLIC_PAPER_DATA_POISONING
    },
    {
      title: 'A novel approach for phishing URLs detection using lexical based machine learning',
      authors: 'Gupta, Brij B., Krishna Yadav, Imran Razzak, et al.',
      venue: 'Computer Communications 175 (2021): 47-57',
      year: '2021',
      type: 'Journal',
      status: 'Published',
      impactFactor: '5.0',
      link: process.env.NEXT_PUBLIC_PAPER_PHISHING_DETECTION
    }
  ]

  return (
    <section id="publications" className="py-20 px-6 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Publications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Peer-reviewed research contributions in top-tier conferences and journals
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0 flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {pub.title}
                    </h3>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex-shrink-0 mt-1"
                        title="View PDF"
                      >
                        {pub.link.includes('drive.google.com') ? (
                          <FileText size={18} />
                        ) : (
                          <ExternalLink size={18} />
                        )}
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Users size={16} />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <div className="flex items-center text-primary-600 dark:text-primary-400">
                      <Calendar className="mr-1" size={14} />
                      <span>{pub.venue} ({pub.year})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pub.type === 'Conference' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : pub.type === 'Journal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {pub.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pub.status === 'Published'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {pub.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</h4>
              <p className="text-gray-600 dark:text-gray-300">Publications</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">400+</h4>
              <p className="text-gray-600 dark:text-gray-300">Citations</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2020-25</h4>
              <p className="text-gray-600 dark:text-gray-300">Active Years</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-indigo-600 dark:text-indigo-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">A*</h4>
              <p className="text-gray-600 dark:text-gray-300">Top Venues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications 