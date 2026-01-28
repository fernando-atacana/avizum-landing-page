'use client'

import { motion } from 'framer-motion'

const useCases = [
  {
    title: 'Clinical Trial Intelligence',
    description:
      'Track competitor clinical trials, identify gaps in the market, and discover partnership opportunities.',
    icon: '🧪',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Regulatory Monitoring',
    description:
      'Stay updated on FDA approvals, regulatory changes, and compliance requirements across markets.',
    icon: '📋',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Market Analysis',
    description:
      'Analyze market trends, pricing strategies, and competitive positioning in real-time.',
    icon: '📊',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Competitor Tracking',
    description:
      'Monitor competitor activities, product launches, and strategic moves with automated alerts.',
    icon: '👁️',
    color: 'from-orange-500 to-red-500',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Use Cases for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Every Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From R&D to commercial strategy, Avizum powers intelligence across
            your organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-primary-300 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative p-8">
                <div className="text-6xl mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="mt-6 flex items-center text-primary-600 font-semibold"
                >
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
