'use client'

import React from 'react'
import { Calendar, ExternalLink, Users, Target } from 'lucide-react'

const Research = () => {
  return (
    <section id="research" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Research Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advancing the frontiers of AI through cutting-edge research
          </p>
        </div>

        {/* SAI Lab Section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Secure and Artificial Intelligence Lab (SAI Lab)
                </h3>
                <a
                  href="https://aicybersecuritycenter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  title="Visit AI Cybersecurity Center"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                Founder and Principal Researcher
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>June 2021 – Present</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Leading research initiatives in federated learning, cybersecurity, and AI safety. 
                Established and manage a research lab focused on developing secure and robust AI systems 
                with applications in distributed learning environments.
              </p>
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Federated Learning
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Privacy-preserving distributed machine learning, adaptive algorithms, and system heterogeneity solutions
            </p>
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              AI Safety & Security
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Adversarial attacks, data poisoning detection, and robust AI system development
            </p>
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <ExternalLink className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Multi-Agent Systems
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Multi-agent systems, resource optimization, and distributed computing at the edge
            </p>
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Contributions to the global research community through high-impact publications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">400+</h4>
              <p className="text-gray-600 dark:text-gray-300">Research Citations</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</h4>
              <p className="text-gray-600 dark:text-gray-300">Published Papers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">A*</h4>
              <p className="text-gray-600 dark:text-gray-300">Top-tier Conferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research 