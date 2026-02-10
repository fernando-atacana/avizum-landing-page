'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              About Us
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed text-gray-200">
                At Avizum, we're revolutionizing how pharmaceutical companies understand
                and navigate competitive landscapes through the power of artificial intelligence.
              </p>

              <p className="text-gray-300">
                Our mission is to provide unprecedented competitive intelligence that empowers
                pharmaceutical companies to make faster, smarter decisions. We combine cutting-edge
                AI technology with deep industry expertise to transform vast amounts of data into
                actionable insights.
              </p>

              <p className="text-gray-300">
                Founded with a vision to democratize competitive intelligence, Avizum leverages
                advanced machine learning algorithms to analyze pharmaceutical data, market trends,
                and competitive dynamics in real-time. Our platform helps companies stay ahead of
                the curve by identifying opportunities and threats before they become apparent.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-300">
                To become the leading AI-powered competitive intelligence platform for the
                pharmaceutical industry, enabling companies to make data-driven decisions that
                drive innovation and growth.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Our Values
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong className="text-white">Innovation:</strong> We continuously push the boundaries of what's possible with AI</li>
                <li><strong className="text-white">Integrity:</strong> We maintain the highest standards of data privacy and security</li>
                <li><strong className="text-white">Impact:</strong> We focus on delivering real value to our clients</li>
                <li><strong className="text-white">Excellence:</strong> We strive for excellence in everything we do</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
