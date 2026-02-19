'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              Contact Us
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Have questions about Avizum? We'd love to hear from you. Reach out to us
                  through any of the channels below.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@avizum.ai"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    info@avizum.ai
                  </a>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-primary-400 hover:text-primary-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Address
                  </h3>
                  <p className="text-gray-300">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Open Contact Modal
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
