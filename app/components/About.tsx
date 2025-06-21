'use client'

import React from 'react'
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: BookOpen, label: 'Publications', value: '5+', description: 'Peer-reviewed papers' },
    { icon: Award, label: 'Citations', value: '400+', description: 'Research citations' },
    { icon: Users, label: 'Experience', value: '3+', description: 'Years in AI/ML' },
    { icon: TrendingUp, label: 'Performance', value: '8X', description: 'Inference optimization' },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about advancing AI research and building scalable ML solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              AI Researcher and ML Engineer with 3+ years of experience specializing in federated learning, 
              deep learning, and multi-agent systems. I have published 5 peer-reviewed papers in top-tier 
              conferences including ICDM, AAAI, and INFOCOM, accumulating over 400 citations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise spans scalable ML solutions, reducing inference time by 8X, and leading 
              cross-functional teams in both startup and enterprise environments. I'm passionate about 
              bridging the gap between cutting-edge research and practical applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium dark:bg-primary-900 dark:text-primary-200">
                Federated Learning
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium dark:bg-primary-900 dark:text-primary-200">
                Deep Learning
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium dark:bg-primary-900 dark:text-primary-200">
                Multi-Agent Systems
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium dark:bg-primary-900 dark:text-primary-200">
                Computer Vision
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <stat.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Education
          </h3>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.Tech Computer Engineering
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                NIT Kurukshetra, India
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {/* CGPA: 7.1/10 */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 