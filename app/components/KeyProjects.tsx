'use client'

import React from 'react'
import { ExternalLink, Calendar, Award, Users, Code } from 'lucide-react'
import Image from 'next/image'

const KeyProjects = () => {
  const keyProjects = [
    {
      title: 'Federated Machine Unlearning',
      description: "In next-generation networks, the integration of edge intelligence and large models has transformed real-time applications such as intrusion detection and anomaly monitoring. However, standard federated learning approaches (e.g., FedAvg) struggle with data heterogeneity across edge devices, often yielding suboptimal performance—especially for minority classes. To address this challenge, we propose an adaptive reparameterization framework called FedGRAA (Federated Gradient-based Adaptive Aggregation). FedGRAA employs an adaptive, gradient-driven weighting strategy that dynamically adjusts each edge device's contributions based on its data distribution, ensuring that clients with smaller datasets still wield a meaningful influence on the global model. This design not only enhances detection accuracy for underrepresented classes but also preserves data privacy by keeping raw data local to the devices. Experimental results show that FedGRAA outperforms FedAvg, increasing accuracy from 80% to 88.88% for minority-class detection. Our findings highlight the importance of adaptive reparameterization in advancing federated learning for edge devices within the evolving landscape of next-generation networks.",
      conference: 'AAAI 2025 DATASAFE Workshop',
      year: '2025',
      status: 'Published',
      image: '/images/aaai.jpg',
      imageAlt: 'AAAI 2025 Conference',
      technologies: ['Python', 'PyTorch', 'Federated Learning', 'Neural Networks'],
      impact: 'First-of-its-kind solution for privacy-compliant machine unlearning',
      link: process.env.NEXT_PUBLIC_PAPER_FEDERATED_UNLEARNING
    },
    {
      title: 'Vertical Federated Learning',
      description: 'Federated learning has emerged as a promising solution for collaborative learning of IoT-based attacks without requiring data sharing. However, system heterogeneity among IoT devices results in diverse feature spaces due to varying device types, protocols, and data formats. This leads to differences in how attacks manifest across devices, causing traditional FL systems to struggle with feature space alignment and model convergence. While common attacks exhibit diverse feature spaces, they share fundamental characteristics. To address this, we utilized an autoencoder at the client side to find an optimal latent representation that captures attack similarities, transforming heterogeneous feature spaces into a uniform latent space. Using the CICIDS 2017 and UNSW datasets, we demonstrated that this approach not only resolves feature space diversity but also enhances model performance, outperforming individual models in 75% of classification scenarios through improved capture of shared attack characteristics.',
      conference: 'IEEE ICDM 2025',
      year: '2024',
      status: 'Published',
      image: '/images/icdm.jpg',
      imageAlt: 'IEEE ICDM Conference',
      technologies: ['Autoencoder', 'Vertical Federated Learning', 'Tensorflow'],
      link: process.env.NEXT_PUBLIC_PAPER_PRIVACY_FL
    },
    {
      title: 'Adaptive Federated Reparameterization',
      description: 'In next-generation networks, the integration of edge intelligence and large models has transformed real-time applications such as intrusion detection and anomaly monitoring. However, standard federated learning approaches (e.g., FedAvg) struggle with data heterogeneity across edge devices, often yielding suboptimal performance—especially for minority classes. To address this challenge, we propose an adaptive reparameterization framework called FedGRAA (Federated Gradient-based Adaptive Aggregation). FedGRAA employs an adaptive, gradient-driven weighting strategy that dynamically adjusts each edge device\'s contributions based on its data distribution, ensuring that clients with smaller datasets still wield a meaningful influence on the global model. This design not only enhances detection accuracy for underrepresented classes but also preserves data privacy by keeping raw data local to the devices. Experimental results show that FedGRAA outperforms FedAvg, increasing accuracy from 80% to 88.88% for minority-class detection. Our findings highlight the importance of adaptive reparameterization in advancing federated learning for edge devices within the evolving landscape of next-generation networks.',
      conference: 'IEEE INFOCOM 2025',
      year: '2025',
      status: 'Published',
      image: '/images/infocom.jpg',
      imageAlt: 'IEEE INFOCOM Conference',
      technologies: ['Multi-Agent Systems', 'Edge Computing', 'Kubernetes', 'Go'],
      link: process.env.NEXT_PUBLIC_PAPER_MULTI_AGENT_FL
    },
    {
      title: 'MCP Server for Solana Development',
      description: 'MCP server linking Solana forums with AI to enhance the Solana dev experience. Track, summarize, and evaluate proposals instantly',
      conference: 'Blockchain Innovation Project',
      year: '2024',
      status: 'Active Development',
      image: '/images/mcp-server.jpg',
      imageAlt: 'Solana MCP Server Project',
      technologies: ['TypeScript', 'Node.js', 'Solana SDK', 'AI/ML APIs', 'MCP Protocol'],
      impact: 'Revolutionizing developer experience in Solana ecosystem through AI-powered proposal tracking',
      link: 'https://github.com/krishnaAiGen/hacksolana'
    }
  ]

  return (
    <section id="key-projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Key Research Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flagship research projects published in top-tier conferences with significant impact
          </p>
        </div>

        <div className="space-y-12">
          {keyProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-contain bg-white p-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-start gap-3 mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex-shrink-0 mt-2"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-primary-600 dark:text-primary-400">
                      <Calendar className="mr-2" size={18} />
                      <span className="font-semibold">{project.conference}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Published'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code className="mr-2" size={16} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex items-start gap-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Award className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">
                        Impact & Recognition
                      </h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Projects Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              These flagship projects represent breakthrough contributions to federated learning and privacy-preserving AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">4</h4>
              <p className="text-gray-600 dark:text-gray-300">Top-Tier Conferences</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-pink-600 dark:text-pink-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">400+</h4>
              <p className="text-gray-600 dark:text-gray-300">Total Citations</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-indigo-600 dark:text-indigo-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">8+</h4>
              <p className="text-gray-600 dark:text-gray-300">Industry Adoptions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyProjects 