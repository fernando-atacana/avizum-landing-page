'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Analysis',
    description:
      'Advanced machine learning algorithms process millions of data points to deliver actionable insights in real-time.',
  },
  {
    icon: '📊',
    title: 'Real-Time Dashboards',
    description:
      'Monitor competitive landscape with customizable dashboards that update automatically as new data arrives.',
  },
  {
    icon: '🔍',
    title: 'Deep Market Intelligence',
    description:
      'Comprehensive coverage of clinical trials, regulatory filings, market trends, and competitor strategies.',
  },
  {
    icon: '⚡',
    title: 'Lightning-Fast Search',
    description:
      'Find exactly what you need in seconds with our powerful search engine powered by natural language processing.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and compliance with HIPAA, GDPR, and other regulatory requirements.',
  },
  {
    icon: '📈',
    title: 'Predictive Analytics',
    description:
      'Forecast market trends and competitor moves with AI-driven predictive models and scenario planning.',
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Modern Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to stay ahead in the competitive
            intelligence landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                hoveredIndex === index
                  ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-accent-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-primary-200 hover:shadow-lg'
              }`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
