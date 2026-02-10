'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import WaitlistModal from './WaitlistModal'
import AIVisualization from './AIVisualization'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(14,165,233,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)]" />
        </div>

        {/* Floating Particles */}
        {mounted && (
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              maskImage: 'radial-gradient(ellipse 200px 200px at 0% 0%, transparent 0%, transparent 40%, black 60%)',
              WebkitMaskImage: 'radial-gradient(ellipse 200px 200px at 0% 0%, transparent 0%, transparent 40%, black 60%)',
            }}
          >
            {[...Array(18)].map((_, i) => {
              // Avoid top-left corner (0-15% x, 0-15% y)
              let randomX = Math.random() * 100
              let randomY = Math.random() * 100
              
              // If particle spawns in top-left corner, move it away
              while (randomX < 15 && randomY < 15) {
                randomX = Math.random() * 100
                randomY = Math.random() * 100
              }
              
              // Calculate animation end positions
              let endX = (randomX + 20) % 100
              let endY = (randomY + 30) % 100
              
              // Ensure animation doesn't go into top-left corner
              while (endX < 15 && endY < 15) {
                endX = (endX + 15) % 100
                endY = (endY + 15) % 100
              }
              
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
                    y: [`${randomY}%`, `${endY}%`],
                    x: [`${randomX}%`, `${endX}%`],
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
              className="space-y-8 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Unprecedented
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Competitive Intelligence AI
                </span>
              </h1>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Wait List
              </motion.button>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* AI Visualization */}
                <div className="absolute inset-0 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                  <AIVisualization />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
