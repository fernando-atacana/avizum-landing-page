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
              <p className="text-2xl leading-relaxed text-white font-semibold">
                Avizum lives at the intersection of human purpose and artificial intelligence.
              </p>

              <p className="text-xl leading-relaxed text-gray-200">
                Founded by leading competitive intelligence group <strong className="text-white">Atacana</strong>, our mission is to democratize access to the power of knowing.
              </p>

              <p className="text-gray-300">
                We are building an intelligence platform that gets work done today and sets the stage for tomorrow. 
                Avizum AICI platform is an AI-powered Work Companion for Intelligence Professionals—a single, 
                collaborative platform that replaces fragmented tools and turns scattered data into forward-looking intelligence.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300">
                To democratize access to the power of knowing. We believe that competitive intelligence should be 
                accessible, actionable, and forward-looking—moving teams from "what happened" to "what's next."
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Our Platform
              </h2>
              <p className="text-gray-300">
                The <strong className="text-white">Avizum AICI Platform</strong> is a proactive, predictive AI Work Companion 
                that unifies the entire competitive intelligence workflow into a single collaborative intelligence ecosystem. Accessible through 
                multiple devices, it guides your daily work, interpreting new events through contextual knowledge, automating 
                analysis, drafting scheduled or on-demand reports for your review, and returning explainable insights to your questions.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                What Sets Us Apart
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Rooted in Experience:</strong> Designed by industry executives from our founder company; 
                  executed by a home-grown team of intelligence engineers.
                </li>
                <li>
                  <strong className="text-white">Market Pioneer:</strong> The first AICI platform to deliver real-time, personalized 
                  AI-generated summaries: one news event, different viewpoints.
                </li>
                <li>
                  <strong className="text-white">Trialed and Validated:</strong> Tested and perfected through over 2 years of renewed 
                  partnerships with our pioneer clients. Each feature built to address a real need.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                The Problem We Solve
              </h2>
              <p className="text-gray-300">
                Professionals operate in highly specialized, regulated, and fast-moving environments. Teams are under constant 
                pressure to cover more information, analyze faster, and communicate more effectively. While AI promises productivity gains, 
                most tools lack the domain knowledge, data foundations, and governance required to stay relevant and trustworthy. Today's solutions remain fragmented and reactive—focused on summarizing collections of past events rather 
                than integrating data into end-to-end user workflows to enable smarter decisions about the future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
