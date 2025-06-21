'use client'

import React from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Polkassembly',
      position: 'Founding AI Engineer',
      duration: 'May 2024 – Present',
      location: 'Singapore',
      achievements: [
        'Multi-Agent SDK Development: Lead cross-functional team of 4 engineers developing comprehensive multi-agent SDK featuring persistent memory from user interactions, microservices architecture, user registration and authentication systems, intelligent coordination layer for agent communication, built-in guardrails for safety, and dynamic query routing across microservices',
        'AI-Powered Content Generation: Developed intelligent meme generator leveraging 2,200+ templates with automated template matching through similarity search, text preprocessing and cleaning algorithms, bounding box detection for optimal text placement, and adaptive logic handling for non-standard image inputs',
        'Product Innovation: Architected and deployed autonomous multi-agent delegate system for Polkassembly governance, featuring integrated chat platform that improved proposal success rates by 40%',
        'Performance Optimization: Developed GPU-accelerated controllers for constrained LLM output generation, achieving 3X reduction in conversational turns and 2X improvement in token utilization across LLAMA 7B, Mistral 7B, and Phi3 models',
        'Data Pipeline Development: Implemented end-to-end automated sentiment analysis pipeline processing 6,000+ crypto news articles using BERT, integrated with Binance trading platform achieving 77% prediction accuracy',
        'Cross-Platform AI Engagement: Built and scaled intelligent conversational system across Telegram, Slack, Instagram, and WhatsApp, enabling users to create custom character files with defined personas, generating personalized engagement experiences that increased user interaction by 60% across all platforms'
      ],
      link: process.env.NEXT_PUBLIC_POLKASSEMBLY
    },
    {
      company: 'Zyod',
      position: 'Machine Learning Engineer',
      duration: 'Dec 2023 – May 2024',
      location: 'Gurgaon, India',
      achievements: [
        'Computer Vision System: Developed production-ready image search engine processing 18,000+ images using ResNet-50 architecture for feature extraction, enabling real-time similarity matching with 95% accuracy',
        'Large-Scale Data Processing: Engineered robust data pipeline scraping and processing 400K+ images from major e-commerce platforms, building custom CNN model for real-time attribute extraction achieving 83% accuracy across 50+ features',
        'Algorithm Optimization: Implemented tree-based image retrieval algorithms, reducing inference time by 8X while maintaining recommendation accuracy, enabling sub-second response times',
        'Machine Learning Innovation: Developed k-means clustering model for fabric and style differentiation using advanced distance metrics, improving product categorization accuracy by 25%',
        'Industry Recognition: Awarded Best Use of AI Technology at IREC Awards 2024 for developing innovative AI solutions that transformed e-commerce product discovery'
      ],
      link: process.env.NEXT_PUBLIC_ZYOD
    },
    {
      company: 'Clearwater Analytics',
      position: 'Software Engineer',
      duration: 'June 2022 – November 2023',
      location: 'Noida, India',
      achievements: [
        'Software Quality Enhancement: Led comprehensive testing initiative for Project Phoebe, writing extensive unit tests that increased code coverage from 30% to 81% across 7,000+ lines of code, significantly improving system reliability',
        'Cross-Functional Collaboration: Collaborated with product, engineering, and business teams on critical financial data analytics and reporting systems, reducing report generation time by 50%'
      ],
      link: process.env.NEXT_PUBLIC_CLEARWATER
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative AI solutions across startups and enterprises
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {exp.position}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 