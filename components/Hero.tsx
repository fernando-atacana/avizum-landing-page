'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AIVisualization from './AIVisualization'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100
            const randomY = Math.random() * 100
            const randomDuration = Math.random() * 10 + 10
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
                initial={{
                  x: `${randomX}%`,
                  y: `${randomY}%`,
                }}
                animate={{
                  y: [`${randomY}%`, `${(randomY + 30) % 100}%`],
                  x: [`${randomX}%`, `${(randomX + 20) % 100}%`],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            )
          })}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold"
            >
              <span className="mr-2">✨</span>
              AI-Powered Intelligence Platform
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Transform Pharma
              </span>
              <br />
              <span className="text-gray-900">Competitive Intelligence</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Harness the power of AI to unlock actionable insights from
              pharmaceutical data. Make faster, smarter decisions with
              real-time competitive intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">10M+</div>
                <div className="text-sm text-gray-600">Data Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px]">
              {/* AI Visualization */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <AIVisualization />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-primary-600">+45%</div>
                <div className="text-sm text-gray-600">Insight Accuracy</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-accent-600">-60%</div>
                <div className="text-sm text-gray-600">Time to Insight</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
