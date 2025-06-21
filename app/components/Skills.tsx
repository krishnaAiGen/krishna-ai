'use client'

import React from 'react'
import { Brain, Code, Database, Cloud, Cpu, Globe } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        'Deep Learning', 'Federated Learning', 'Computer Vision', 'Natural Language Processing',
        'Reinforcement Learning', 'Generative AI', 'Large Language Models (LLMs)', 'Multi-Agent Systems',
        'Transfer Learning', 'Fine-tuning', 'RLHF'
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL']
    },
    {
      title: 'ML Frameworks & Libraries',
      icon: Cpu,
      skills: [
        'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'Hugging Face', 'Flask', 'FastAPI',
        'Transformers', 'LangChain', 'LangGraph', 'LlamaIndex', 'OpenAI API', 'Anthropic Claude API', 'Ollama'
      ]
    },
    {
      title: 'LLM & GenAI Tools',
      icon: Brain,
      skills: [
        'OpenAI GPT-4', 'Claude', 'Llama', 'Mistral', 'Gemini', 'Ollama', 'LangChain', 'LangGraph',
        'Hugging Face Hub', 'LoRA', 'QLoRA'
      ]
    },
    {
      title: 'Vector Databases & RAG',
      icon: Database,
      skills: [
        'ChromaDB', 'Pinecone', 'RAG Architecture', 'Embedding Models', 'Retrieval Augmented Generation'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        'AWS (EC2, S3, Lambda, SageMaker)', 'Google Cloud Platform (Vertex AI)', 'Docker', 'Git',
        'CI/CD', 'MLOps', 'GitHub Actions'
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Jupyter', 'PyCharm', 'VS Code', 'Linux']
    },
    {
      title: 'Specialized AI Skills',
      icon: Cpu,
      skills: [
        'Prompt Engineering', 'Few-Shot Learning', 'Retrieval Augmented Generation (RAG)',
        'Model Compression', 'Quantization', 'Distributed Computing', 'API Development',
        'Web Scraping', 'A/B Testing', 'Statistical Analysis'
      ]
    },
    {
      title: 'Web3 & Blockchain',
      icon: Globe,
      skills: ['DeFi', 'NFTs', 'Crypto Trading APIs', 'Blockchain Analytics']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the AI/ML technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-900 dark:hover:text-primary-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">10+</h4>
              <p className="text-gray-600 dark:text-gray-300">AI/ML Technologies</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">5+</h4>
              <p className="text-gray-600 dark:text-gray-300">Programming Languages</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">15+</h4>
              <p className="text-gray-600 dark:text-gray-300">Frameworks & Tools</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3+</h4>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 